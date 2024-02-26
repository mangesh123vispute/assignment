// PieChart.js

import { Pie } from "react-chartjs-2";

const PieChart = () => {
  // Sample data for the pie chart
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
