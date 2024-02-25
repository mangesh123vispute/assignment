/* eslint-disable react/prop-types */
import AppContext from "../context/appcontext.jsx";
import { useContext, useEffect } from "react";

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
    SelectedendYears,
    SelectedTopic,
    SelectedSector,
    SelectedRegion,
    SelectedPestle,
    SelectedSource,
    SelectedCountry,
    filter,
    filteredData,
  } = context;
  useEffect(() => {
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    SelectedendYears,
    SelectedTopic,
    SelectedSector,
    SelectedRegion,
    SelectedPestle,
    SelectedSource,
    SelectedCountry,
  ]);

  const handleItemClick = (item) => {
    switch (type) {
      case "year":
        setSelectedendYear((prevSelectedYears) => {
          const uniqueYears = new Set([...prevSelectedYears, item]);
          return [...uniqueYears];
        });
        break;
      case "topic":
        setSelectedTopic((prevSelectedTopics) => {
          const uniqueTopics = new Set([...prevSelectedTopics, item]);
          return [...uniqueTopics];
        });
        break;
      case "sector":
        setSelectedSector((prevSelectedSectors) => {
          const uniqueSectors = new Set([...prevSelectedSectors, item]);
          return [...uniqueSectors];
        });
        break;
      case "region":
        setSelectedRegion((prevSelectedRegions) => {
          const uniqueRegions = new Set([...prevSelectedRegions, item]);
          return [...uniqueRegions];
        });
        break;
      case "pestle":
        setSelectedPestle((prevSelectedPestles) => {
          const uniquePestles = new Set([...prevSelectedPestles, item]);
          return [...uniquePestles];
        });
        break;
      case "source":
        setSelectedSource((prevSelectedSources) => {
          const uniqueSources = new Set([...prevSelectedSources, item]);
          return [...uniqueSources];
        });
        break;
      case "country":
        setSelectedCountry((prevSelectedCountries) => {
          const uniqueCountries = new Set([...prevSelectedCountries, item]);
          return [...uniqueCountries];
        });
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
      {console.log("Data is filtered", filteredData)}
    </>
  );
};

export default Filter;
