import { useEffect, useContext } from "react";
import AppContext from "../context/appcontext.jsx";
import Filter from "./Filter.jsx";
import BarChart from "./Barchart.jsx";
import DoughnutChart from "./Doughnut.jsx";
import WorldMap from "./WorldMap.jsx";
import PieChart from "./PieChart.jsx";

const Dashboard = () => {
  const context = useContext(AppContext);

  const {
    getDatainArray,
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    country,
    filteredData,
    generateTopicFrequency,
  } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getDatainArray();
    generateTopicFrequency();
  }, [filteredData]);

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
        <Filter option={end_year} type="Endyear" />
        <Filter option={topic} type="topic" />
        <Filter option={sector} type="sector" />
        <Filter option={region} type="region" />
        <Filter option={pestle} type="pestle" />
        <Filter option={source} type="source" />
        <Filter option={country} type="country" />
        {console.log("country", country)}

        <BarChart />
        <PieChart />

        <DoughnutChart />
        <WorldMap />
      </div>
    </div>
  );
};

export default Dashboard;
