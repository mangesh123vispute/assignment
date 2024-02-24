import { useEffect, useContext } from "react";
import AppContext from "../context/appcontext.jsx";
// import ScatterChart from "./Graph";
// import RadarChart from "./Radar";
import Filter from "./Filter.jsx";

const Dashboard = () => {
  const context = useContext(AppContext);

  const {
    data,
    getDatainArray,
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    country,
  } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getDatainArray();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Filter option={end_year} type="year" />
        <Filter option={topic} type="topic" />
        <Filter option={sector} type="sector" />
        <Filter option={region} type="region" />
        <Filter option={pestle} type="pestle" />
        <Filter option={source} type="source" />
        <Filter option={country} type="country" />

        {/* <ScatterChart data={data} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
