/* eslint-disable react/prop-types */
import AppContext from "./appcontext.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
const AppState = (props) => {
  //*All Least of items
  const [end_year, setEndyear] = useState([]);
  const [topic, setTopic] = useState([]);
  const [sector, setSector] = useState([]);
  const [region, setRegion] = useState([]);
  const [pestle, setPestle] = useState([]);
  const [source, setSource] = useState([]);
  const [country, setCountry] = useState([]);
  //* Selected Items to filter
  const [SelectedendYears, setSelectedendYear] = useState([]);
  const [SelectedTopic, setSelectedTopic] = useState([]);
  const [SelectedSector, setSelectedSector] = useState([]);
  const [SelectedRegion, setSelectedRegion] = useState([]);
  const [SelectedPestle, setSelectedPestle] = useState([]);
  const [SelectedSource, setSelectedSource] = useState([]);
  const [SelectedCountry, setSelectedCountry] = useState([]);
  //* All Data
  const [data, setData] = useState([]);

  //* Filtered data
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("this are the selected years", SelectedendYears);
    console.log("this are the selected topics", SelectedTopic);
    console.log("this are the selected sectors", SelectedSector);
    console.log("this are the selected regions", SelectedRegion);
    console.log("this are the selected pestles", SelectedPestle);
    console.log("this are the selected sources", SelectedSource);
    console.log("this are the selected countries", SelectedCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    country,
    SelectedendYears,
    SelectedTopic,
    SelectedSector,
    SelectedRegion,
    SelectedPestle,
    SelectedSource,
    SelectedCountry,
  ]);

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //* Filter data based on the selected options
  //* and storing it into the data
  const filter = async () => {
    try {
      const FilteredDataBasedOnEndYear = data.filter((item) =>
        SelectedendYears.includes(item.end_year)
      );

      setFilteredData((prevFilteredData) => {
        const uniqueValuesSet = new Set([
          ...prevFilteredData,
          ...FilteredDataBasedOnEndYear,
        ]);
        return Array.from(uniqueValuesSet);
      });
    } catch (error) {
      console.error("Error filtering data:", error);
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
        SelectedendYears,
        SelectedTopic,
        SelectedSector,
        SelectedRegion,
        SelectedPestle,
        SelectedSource,
        SelectedCountry,
        setSelectedendYear,
        setSelectedTopic,
        setSelectedSector,
        setSelectedRegion,
        setSelectedPestle,
        setSelectedSource,
        setSelectedCountry,
        setEndyear,
        setTopic,
        setSector,
        setRegion,
        setPestle,
        setSource,
        setCountry,
        filter,
        filteredData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
