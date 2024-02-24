import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const ScatterChart = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    // eslint-disable-next-line react/prop-types
    const data = props.data.slice(
      (currentPage - 1) * dataPerPage,
      currentPage * dataPerPage
    );

    const myChart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Data Points",
            data: data.map((point) => ({
              x: point.likelihood,
              y: point.intensity,
              r: 5,
            })),
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
            title: {
              display: true,
              text: "Likelihood",
              font: {
                size: 16,
                weight: "bold",
              },
              color: "rgba(0, 0, 0, 0.8)",
            },
            min: 0,
            max: 10,
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
          y: {
            type: "linear",
            position: "left",
            title: {
              display: true,
              text: "Intensity",
              font: {
                size: 16,
                weight: "bold",
              },
              color: "rgba(0, 0, 0, 0.8)",
            },
            min: 0,
            max: 20,
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const point = data[context.dataIndex];
                return `Intensity: ${point.intensity}, Likelihood: ${point.likelihood}, Relevance: ${point.relevance}, Year: ${point.start_year}, Country: ${point.country}, Topics: ${point.topic}, Region: ${point.region}, Insight: ${point.insight}`;
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
    // eslint-disable-next-line react/prop-types
  }, [props.data, currentPage, dataPerPage]);

  // eslint-disable-next-line react/prop-types
  const totalPages = Math.ceil(props.data.length / dataPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default ScatterChart;
