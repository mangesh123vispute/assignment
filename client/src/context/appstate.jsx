/* eslint-disable react/prop-types */
import AppContext from "./appcontext.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
const AppState = (props) => {
  const [data, setData] = useState([]);
  const [end_year, setEndyear] = useState([]);
  const [topic, setTopic] = useState([]);
  const [sector, setSector] = useState([]);
  const [region, setRegion] = useState([]);
  const [pestle, setPestle] = useState([]);
  const [source, setSource] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    console.log(end_year);
    console.log(topic);
    console.log(sector);
    console.log(region);
    console.log(pestle);
    console.log(source);
    console.log(country);
  }, [end_year, topic, sector, region, pestle, source, country]);

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

  const getDatainArray = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      const fetchedData = response.data;
      console.log(fetchedData);
      setData(fetchedData);

      const endYearArray = fetchedData.map((item) => item.end_year);
      const filteredSet = new Set(endYearArray.filter((item) => item !== ""));
      setEndyear([...filteredSet]);

      const topicArray = fetchedData.map((item) => item.topic);
      const filteredSet2 = new Set(topicArray.filter((item) => item !== ""));
      setTopic([...filteredSet2]);

      const sectorArray = fetchedData.map((item) => item.sector);
      const filteredSet3 = new Set(sectorArray.filter((item) => item !== ""));
      setSector([...filteredSet3]);

      const regionArray = fetchedData.map((item) => item.region);
      const filteredSet4 = new Set(regionArray.filter((item) => item !== ""));
      setRegion([...filteredSet4]);

      const pestleArray = fetchedData.map((item) => item.pestle);
      const filteredSet5 = new Set(pestleArray.filter((item) => item !== ""));
      setPestle([...filteredSet5]);

      const sourceArray = fetchedData.map((item) => item.source);
      const filteredSet6 = new Set(sourceArray.filter((item) => item !== ""));
      setSource([...filteredSet6]);

      const countryArray = fetchedData.map((item) => item.country);
      const filteredSet7 = new Set(countryArray.filter((item) => item !== ""));
      setCountry([...filteredSet7]);

      console.log("Data fetched successfully:", end_year);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        getDatainArray,
        end_year,
        topic,
        sector,
        region,
        pestle,
        source,
        country,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
