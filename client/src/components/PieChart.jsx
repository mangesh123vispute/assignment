// PieChart.js

import { Pie } from "react-chartjs-2";
import AppContext from "../context/appcontext.jsx";
import { useContext } from "react";

const PieChart = () => {
  const context = useContext(AppContext);
  const { regionLeastAlongwihFrequency } = context;
  console.log("regionLeastAlongwihFrequency", regionLeastAlongwihFrequency);

  // Sample data for the pie chart
  const data = {
    labels: Object.keys(regionLeastAlongwihFrequency),
    datasets: [
      {
        data: Object.values(regionLeastAlongwihFrequency),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div
      style={{
        textAlign: "center",
        height: "auto",
        width: "auto",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <h2>Region</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
