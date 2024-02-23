import { useEffect } from "react";
import Chart from "chart.js/auto";

const RadarChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart2");
    const data = [
      // Your dataset goes here
    ];

    const myChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Intensity", "Likelihood", "Relevance", "Year"],
        datasets: [
          {
            label: "Dataset",
            data: data.map((item) => [
              item.intensity,
              item.likelihood,
              item.relevance,
              item.year,
            ]),
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
          },
        ],
      },
      options: {
        // Customize the chart options as needed
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myChart2"></canvas>
    </div>
  );
};

export default RadarChart;
