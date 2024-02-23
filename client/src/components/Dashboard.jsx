import { useEffect, useContext } from "react";
import AppContext from "../context/appcontext.jsx";
import ScatterChart from "./Graph";
import RadarChart from "./Radar";

const Dashboard = () => {
  const context = useContext(AppContext);

  // Ensure that context and its properties are defined before using them
  if (!context || !context.fetchData || !context.data) {
    console.error("Context or context properties are undefined.");
    return null; // or render some loading/error component
  }

  const { fetchData, data } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <ScatterChart data={data} />
        <RadarChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
