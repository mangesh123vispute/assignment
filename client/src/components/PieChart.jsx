// PieChart.js

import { Pie } from "react-chartjs-2";
import AppContext from "../context/appcontext.jsx";
import { useContext } from "react";

const PieChart = () => {
  const context = useContext(AppContext);
  const { regionLeastAlongwihFrequency } = context;

  // Sample data for the pie chart
  const data = {
    labels:
      Object.keys(regionLeastAlongwihFrequency).length == 0
        ? ["No Region"]
        : Object.keys(regionLeastAlongwihFrequency),
    datasets: [
      {
        data:
          Object.values(regionLeastAlongwihFrequency).length == 0
            ? [100]
            : Object.values(regionLeastAlongwihFrequency),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
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
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
