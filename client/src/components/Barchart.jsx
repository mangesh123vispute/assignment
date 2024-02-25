import { useEffect, useRef, useContext } from "react";
import Chart from "chart.js/auto";

import AppContext from "../context/appcontext.jsx";
import Search from "./Search.jsx";

const BarChart = () => {
  const chartRef = useRef(null);
  const context = useContext(AppContext);
  const { selectedItem } = context;

  useEffect(() => {
    const data = {
      labels: ["Intensity", "Likelihood", "Relevance"],
      datasets: [
        {
          label: "Percentage",
          data: [
            (selectedItem.intensity / 97) * 100,
            (selectedItem.likelihood / 4) * 100,
            (selectedItem.relevance / 7) * 100,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(54, 162, 235, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Percentage",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
      },
    };

    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <>
      <Search />
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <div
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Title:{" "}
          {selectedItem.title
            ? selectedItem.title
            : "No Title ,Select an item first"}
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "10px",
              marginBottom: "10px",
              color: "blue",
            }}
          >
            StartYear:{" "}
            {selectedItem.start_year ? selectedItem.start_year : "Null"} <br />{" "}
            EndYear : {selectedItem.end_year ? selectedItem.end_year : "Null"}{" "}
          </p>
        </div>
        <div>
          <canvas
            ref={chartRef}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          ></canvas>
          <small
            style={{
              fontSize: "14px",
              marginLeft: "25px",
              fontWeight: "bold",
            }}
          >
            Intensity: {selectedItem.intensity ? selectedItem.intensity : "0"}
            /96, Likelihood:{" "}
            {selectedItem.likelihood ? selectedItem.likelihood : "0"}/4,
            Relevance: {selectedItem.relevance ? selectedItem.relevance : "0"}/7
          </small>{" "}
        </div>
      </div>
    </>
  );
};

export default BarChart;
