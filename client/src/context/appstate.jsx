/* eslint-disable react/prop-types */
import AppContext from "./appcontext.jsx";
import { useState } from "react";
import axios from "axios";
const AppState = (props) => {
  const [data, setData] = useState([]);
  const [endyear, setEndyear] = useState([]);
  const [topics, setTopics] = useState([]);
  const [sector, setSector] = useState([]);
  const [region, setRegion] = useState([]);
  const [pest, setPest] = useState([]);
  const [source, setSource] = useState([]);
  const [swot, setSwot] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //*Fetching The Data From The Backend,
  //to set the fields in the filter
  //data begin fatched ,

  //end year
  //topics
  //sector
  //region
  //pest
  //source
  //swot
  //country
  //city

  //* and storing it into the array

  // const getData = async (data) => {
  //   try {
  //   } catch (error) {}
  // };

  return (
    <AppContext.Provider
      value={{
        // getData,
        fetchData,
        data,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
