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
    generateCountryFrequency,
    generateRegionFrequency,
  } = context;

  useEffect(() => {
    getDatainArray();
    generateTopicFrequency();
    generateCountryFrequency();
    generateRegionFrequency();
  }, [filteredData]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "100px",
        }}
      >
        <h2>Filters</h2>
        <Filter option={end_year} type="Endyear" />
        <Filter option={topic} type="topic" />
        <Filter option={sector} type="sector" />
        <Filter option={region} type="region" />
        <Filter option={pestle} type="pestle" />
        <Filter option={source} type="source" />
        <Filter option={country} type="country" />
      </div>
      <div>
        <BarChart />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "100px",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "50px",
            marginBottom: "50px",
            marginRight: "180px",
          }}
        >
          <PieChart />
          <DoughnutChart />
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "200px",
          }}
        >
          <WorldMap />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
