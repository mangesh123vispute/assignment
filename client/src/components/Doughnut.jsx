import { useEffect, useRef, useContext } from "react";
import Chart from "chart.js/auto";
import AppContext from "../context/appcontext.jsx";

const DoughnutChart = () => {
  const context = useContext(AppContext);
  const { topicleastAlongwihFrequency } = context;
  const chartRef = useRef(null);
  const data = Object.values(topicleastAlongwihFrequency);
  const labels = Object.keys(topicleastAlongwihFrequency);

  useEffect(() => {
    const doughnutChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      doughnutChart.destroy();
    };
  }, [topicleastAlongwihFrequency]);

  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
