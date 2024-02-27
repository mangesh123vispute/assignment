/* eslint-disable react/prop-types */
import AppContext from "./appcontext.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
const AppState = (props) => {
  //* All Least of items
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

  //* selected item
  const [selectedItem, setSelectedItem] = useState({});

  //* topicleastAlongwihFrequency
  const [topicleastAlongwihFrequency, setTopicleastAlongwihFrequency] =
    useState({});
  //* countries along with the frequency from the filtered data
  const [countryLeastAlongwihFrequency, setCountryLeastAlongwihFrequency] =
    useState({});

  //* Region along with the frequency from the filtered data
  const [regionLeastAlongwihFrequency, setRegionLeastAlongwihFrequency] =
    useState({});

  useEffect(() => {
    const selectedCities = [];

    Object.keys(countryLeastAlongwihFrequency).forEach((city) => {
      const matchingObject = countryLongitudeAndLogitude.find(
        (country) => country.name === city
      );

      if (matchingObject) {
        matchingObject.frequency = countryLeastAlongwihFrequency[city];
        selectedCities.push(matchingObject);
      }
    });

    const uniqueSelectedCities = Array.from(
      new Set(selectedCities.map((city) => JSON.stringify(city)))
    ).map((json) => JSON.parse(json));

    setSelectedCountryLongitudeAndLogitude(uniqueSelectedCities);
  }, [countryLeastAlongwihFrequency]);

  // ... (rest of the component code)
  // *All longitude and logitude
  const countryLongitudeAndLogitude = [
    {
      name: "United States of America",
      latitude: 37.0902,
      longitude: -95.7129,
    },
    { name: "Mexico", latitude: 23.6345, longitude: -102.5528 },
    { name: "Nigeria", latitude: 9.082, longitude: 8.6753 },
    { name: "Lebanon", latitude: 33.8547, longitude: 35.8623 },
    { name: "Russia", latitude: 61.524, longitude: 105.3188 },
    { name: "Saudi Arabia", latitude: 23.8859, longitude: 45.0792 },
    { name: "Angola", latitude: -11.2027, longitude: 17.8739 },
    { name: "Egypt", latitude: 26.8206, longitude: 30.8025 },
    { name: "South Africa", latitude: -30.5595, longitude: 22.9375 },
    { name: "India", latitude: 20.5937, longitude: 78.9629 },
    { name: "Ukraine", latitude: 48.3794, longitude: 31.1656 },
    { name: "Azerbaijan", latitude: 40.1431, longitude: 47.5769 },
    { name: "China", latitude: 35.8617, longitude: 104.1954 },
    { name: "Colombia", latitude: 4.5709, longitude: -74.2973 },
    { name: "Niger", latitude: 17.6078, longitude: 8.0817 },
    { name: "Libya", latitude: 26.3351, longitude: 17.2283 },
    { name: "Brazil", latitude: -14.235, longitude: -51.9253 },
    { name: "Mali", latitude: 17.5707, longitude: -3.9962 },
    { name: "Indonesia", latitude: -0.7893, longitude: 113.9213 },
    { name: "Iraq", latitude: 33.3152, longitude: 44.3661 },
    { name: "Iran", latitude: 32.4279, longitude: 53.688 },
    { name: "South Sudan", latitude: 6.877, longitude: 31.307 },
    { name: "Venezuela", latitude: 6.4238, longitude: -66.5897 },
    { name: "Burkina Faso", latitude: 12.2383, longitude: -1.5616 },
    { name: "Germany", latitude: 51.1657, longitude: 10.4515 },
    { name: "United Kingdom", latitude: 55.3781, longitude: -3.436 },
    { name: "Kuwait", latitude: 29.3759, longitude: 47.9774 },
    { name: "Canada", latitude: 56.1304, longitude: -106.3468 },
    { name: "Argentina", latitude: -38.4161, longitude: -63.6167 },
    { name: "Japan", latitude: 36.2048, longitude: 138.2529 },
    { name: "Austria", latitude: 47.5162, longitude: 14.5501 },
    { name: "Spain", latitude: 40.4637, longitude: -3.7492 },
    { name: "Estonia", latitude: 58.5953, longitude: 25.0136 },
    { name: "Hungary", latitude: 47.1625, longitude: 19.5033 },
    { name: "Australia", latitude: -25.2744, longitude: 133.7751 },
    { name: "Morocco", latitude: 31.7917, longitude: -7.0926 },
    { name: "Greece", latitude: 39.0742, longitude: 21.8243 },
    { name: "Qatar", latitude: 25.2769, longitude: 51.52 },
    { name: "Oman", latitude: 21.4735, longitude: 55.9754 },
    { name: "Liberia", latitude: 6.4281, longitude: -9.4295 },
    { name: "Denmark", latitude: 56.2639, longitude: 9.5018 },
    { name: "Malaysia", latitude: 4.2105, longitude: 101.9758 },
    { name: "Jordan", latitude: 30.5852, longitude: 36.2384 },
    { name: "Syria", latitude: 35.8617, longitude: 38.4742 },
    { name: "Ethiopia", latitude: 9.145, longitude: 40.4897 },
    { name: "Norway", latitude: 60.472, longitude: 8.4689 },
    { name: "Ghana", latitude: 7.25, longitude: -0.0662 },
    { name: "Kazakhstan", latitude: 48.0196, longitude: 66.9237 },
    { name: "Pakistan", latitude: 30.3753, longitude: 69.3451 },
    { name: "Gabon", latitude: -0.8037, longitude: 11.6094 },
    { name: "United Arab Emirates", latitude: 23.4241, longitude: 53.8478 },
    { name: "Algeria", latitude: 28.0339, longitude: 1.6596 },
    { name: "Turkey", latitude: 38.9637, longitude: 35.2433 },
    { name: "Cyprus", latitude: 35.1264, longitude: 33.4299 },
    { name: "Belize", latitude: 17.1899, longitude: -88.4976 },
    { name: "Poland", latitude: 51.9194, longitude: 19.1451 },
  ];
  const [
    SelectedCountryLongitudeAndLogitude,
    setSelectedCountryLongitudeAndLogitude,
  ] = useState([]);

  const generateTopicFrequency = () => {
    const topicFrequency = {};

    filteredData.forEach((item) => {
      const { topic } = item;

      if (topic && !Object.keys(topicFrequency).includes(topic)) {
        topicFrequency[topic] = 1;
      } else if (topic) {
        topicFrequency[topic]++;
      }
    });

    setTopicleastAlongwihFrequency(topicFrequency);
  };
  const generateRegionFrequency = () => {
    const regionFrequency = {};

    filteredData.forEach((item) => {
      const { region } = item;

      if (region && !Object.keys(regionFrequency).includes(region)) {
        regionFrequency[region] = 1;
      } else if (region) {
        regionFrequency[region]++;
      }
    });

    setRegionLeastAlongwihFrequency(regionFrequency);
  };
  const generateCountryFrequency = () => {
    const countryFrequency = {};

    filteredData.forEach((item) => {
      const { country } = item;

      if (country && !Object.keys(countryFrequency).includes(country)) {
        countryFrequency[country] = 1;
      } else if (country) {
        countryFrequency[country]++;
      }
    });

    setCountryLeastAlongwihFrequency(countryFrequency);
  };

  // & Fetching The Data From The Backend,
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

  //& and storing it into the array

  const getDatainArray = async () => {
    try {
      const response = await axios.get(
        "https://assignment-dod7.onrender.com/api/data"
      );
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

  //& Filter data based on the selected options
  //& and storing it into the data
  const filter = async () => {
    try {
      const filteredDataBasedOnEndYear = new Set(
        data.filter((item) => SelectedendYears.includes(item.end_year))
      );

      const filteredDataBasedOnTopic = new Set(
        data.filter((item) => SelectedTopic.includes(item.topic))
      );

      const filteredDataBasedOnSector = new Set(
        data.filter((item) => SelectedSector.includes(item.sector))
      );

      const filteredDataBasedOnRegion = new Set(
        data.filter((item) => SelectedRegion.includes(item.region))
      );

      const filteredDataBasedOnPestle = new Set(
        data.filter((item) => SelectedPestle.includes(item.pestle))
      );

      const filteredDataBasedOnSource = new Set(
        data.filter((item) => SelectedSource.includes(item.source))
      );

      const filteredDataBasedOnCountry = new Set(
        data.filter((item) => SelectedCountry.includes(item.country))
      );

      const mergedSet = new Set([
        ...filteredDataBasedOnEndYear,
        ...filteredDataBasedOnTopic,
        ...filteredDataBasedOnSector,
        ...filteredDataBasedOnRegion,
        ...filteredDataBasedOnPestle,
        ...filteredDataBasedOnSource,
        ...filteredDataBasedOnCountry,
      ]);

      setFilteredData(Array.from(mergedSet));
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
        setSelectedItem,
        selectedItem,
        topicleastAlongwihFrequency,
        setTopicleastAlongwihFrequency,
        generateTopicFrequency,
        generateCountryFrequency,
        countryLeastAlongwihFrequency,
        countryLongitudeAndLogitude,
        SelectedCountryLongitudeAndLogitude,
        generateRegionFrequency,
        regionLeastAlongwihFrequency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
