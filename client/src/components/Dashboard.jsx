import { useEffect, useContext } from "react";
import AppContext from "../context/appcontext.jsx";
import ScatterChart from "./Graph";
import RadarChart from "./Radar";
import Filter from "./Filter.jsx";

const Dashboard = () => {
  const context = useContext(AppContext);

  const { data, getDatainArray } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getDatainArray();
  }, []);

  return (
    <div>
      <div>
        <Filter />
        {/* <ScatterChart data={data} /> */}
        {/* <RadarChart data={data} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
