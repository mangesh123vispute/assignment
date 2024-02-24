/* eslint-disable react/prop-types */
import AppContext from "../context/appcontext.jsx";
import { useContext } from "react";

const Filter = (props) => {
  const context = useContext(AppContext);
  const { option, type } = props;
  const {
    setSelectedendYear,
    setSelectedTopic,
    setSelectedSector,
    setSelectedRegion,
    setSelectedPestle,
    setSelectedSource,
    setSelectedCountry,
  } = context;

  const handleItemClick = (item) => {
    switch (type) {
      case "year":
        setSelectedendYear((prevSelectedYears) => [...prevSelectedYears, item]);
        break;
      case "topic":
        setSelectedTopic((prevSelectedTopics) => [...prevSelectedTopics, item]);
        break;
      case "sector":
        setSelectedSector((prevSelectedSectors) => [
          ...prevSelectedSectors,
          item,
        ]);
        break;
      case "region":
        setSelectedRegion((prevSelectedRegions) => [
          ...prevSelectedRegions,
          item,
        ]);
        break;
      case "pestle":
        setSelectedPestle((prevSelectedPestles) => [
          ...prevSelectedPestles,
          item,
        ]);
        break;
      case "source":
        setSelectedSource((prevSelectedSources) => [
          ...prevSelectedSources,
          item,
        ]);
        break;
      case "country":
        setSelectedCountry((prevSelectedCountries) => [
          ...prevSelectedCountries,
          item,
        ]);
        break;

      default:
        alert("Please select correct option");
        break;
    }
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select {type}
        </button>
        <ul
          className="dropdown-menu"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {option.map((item, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filter;
