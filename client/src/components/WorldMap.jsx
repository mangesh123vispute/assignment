import { useEffect, useRef, useContext } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import AppContext from "../context/appcontext.jsx";

const WorldMap = () => {
  const context = useContext(AppContext);
  const { SelectedCountryLongitudeAndLogitude, countryLeastAlongwihFrequency } =
    context;
  console.log(countryLeastAlongwihFrequency);
  console.log(SelectedCountryLongitudeAndLogitude);
  const svgRef = useRef(null);

  const sampleData = SelectedCountryLongitudeAndLogitude;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Map dimensions and margins
    const width = svg.attr("width");
    const height = svg.attr("height");
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Projection (use desired projection, e.g., equirectangular)
    const projection = d3
      .geoEquirectangular()
      .scale(180)
      .translate([innerWidth / 2, innerHeight / 2]);

    // Load the world map GeoJSON data
    d3.json("https://unpkg.com/world-atlas@1/world/110m.json")
      .then((worldData) => {
        // Check if data is loaded successfully
        if (!worldData) {
          console.error("Error fetching GeoJSON data.");
          return; // Exit if data is not available
        }

        // Create a path generator for drawing the map
        const path = d3.geoPath().projection(projection);

        // Draw the map background
        svg
          .append("g")
          .selectAll("path")
          .data(
            topojson.feature(worldData, worldData.objects.countries).features
          )
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "#ccc")
          .attr("stroke", "#fff")
          .attr("stroke-width", 0.5);

        // Draw points based on sample data
        svg
          .append("g")
          .selectAll("circle")
          .data(sampleData)
          .enter()
          .append("circle")
          .attr("r", 5) // Increase the radius of the circles
          .attr("fill", "#40E0D0") // Adjust point color as needed
          .attr("stroke", "#000")
          .attr("stroke-width", 1)
          .attr("transform", (d) => {
            const coordinates = projection([d.longitude, d.latitude]);
            return coordinates ? `translate(${coordinates})` : null;
          })
          .append("title")
          .append("frequency")
          .text((d) => d.name);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON:", error);
      });
  }, [SelectedCountryLongitudeAndLogitude]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Countries friquency on The world Map
      </h1>
      <svg
        id="world-map"
        ref={svgRef}
        width="800"
        height="500"
        viewBox="0 0 800 500"
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
        }}
      ></svg>
    </div>
  );
};

export default WorldMap;
