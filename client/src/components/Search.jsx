import { MDBDataTable } from "mdbreact";
import AppContext from "../context/appcontext.jsx";
import { useContext } from "react";

const Search = () => {
  const context = useContext(AppContext);
  const { filteredData, setSelectedItem } = context;

  const handleSelect = (item) => {
    setSelectedItem(item);
    alert("You successfully selected the item: " + item.title);
  };

  const data = {
    columns: [
      { label: "Title", field: "title", sort: "asc", width: 150 },
      { label: "Intensity", field: "intensity", sort: "asc", width: 150 },
      { label: "Likelihood", field: "likelihood", sort: "asc", width: 150 },
      { label: "Relevance", field: "relevance", sort: "asc", width: 150 },
      { label: "Country", field: "country", sort: "asc", width: 150 },
      { label: "Topics", field: "topics", sort: "asc", width: 150 },
      { label: "Region", field: "region", sort: "asc", width: 150 },
      { label: "Action", field: "action", width: 100 },
    ],
    rows: filteredData.map((item) => ({
      title: item.title ? item.title : "N/A",
      intensity: item.intensity ? item.intensity : "N/A",
      likelihood: item.likelihood ? item.likelihood : "N/A",
      relevance: item.relevance ? item.relevance : "N/A",
      country: item.country ? item.country : "N/A",
      topics: item.topic ? item.topic : "N/A",
      region: item.region ? item.region : "N/A",
      action: (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleSelect(item)}
        >
          Select
        </button>
      ),
    })),
  };

  return (
    <>
      <MDBDataTable
        striped
        bordered
        small
        data={data}
        responsive
        hover
        entriesOptions={[5, 10]}
        entries={5}
        pagesAmount={4}
        searchtop="true"
        searchbottom="false"
        barReverse
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default Search;
