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
    console.log("this is filtered data", filteredData);
  }, [filteredData]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "100px",
      }}
    >
      <div className="filters-container ">
        <div
          className="sticky-top"
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "100px",
            backgroundColor: "#f2f2f2",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            position: "sticky",
            top: "20px",
            zIndex: "1000",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Filters</h2>
          <Filter option={end_year} type="Endyear" />
          <Filter option={topic} type="topic" />
          <Filter option={sector} type="sector" />
          <Filter option={region} type="region" />
          <Filter option={pestle} type="pestle" />
          <Filter option={source} type="source" />
          <Filter option={country} type="country" />
        </div>
      </div>

      <div className="visualizations-container">
        <BarChart />
        <br />
        <br />

        <div
          className="charts-container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "100px",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
            marginRight: "180px",
          }}
        >
          <div>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Region Frequency
            </h1>
            <PieChart />
          </div>

          <div>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Topic Frequency
            </h1>
            <DoughnutChart />
          </div>
        </div>
        <br />
        <br />
        <div
          className="map-container"
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
