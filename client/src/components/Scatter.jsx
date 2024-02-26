import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const WorldMap = () => {
  const svgRef = useRef(null);

  const sampleData = [
    { name: "London", latitude: 51.505, longitude: -0.09 },
    { name: "New York", latitude: 40.7128, longitude: -74.0059 },
    { name: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
    { name: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
    { name: "Beijing", latitude: 39.9042, longitude: 116.4074 },
    { name: "Cairo", latitude: 30.033, longitude: 31.2336 },
    { name: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  ];

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
          .attr("r", 2) // Increase the radius of the circles
          .attr("fill", "#f00") // Adjust point color as needed
          .attr("stroke", "#000")
          .attr("stroke-width", 1)
          .attr("transform", (d) => {
            const coordinates = projection([d.longitude, d.latitude]);
            return coordinates ? `translate(${coordinates})` : null;
          })
          .append("title")
          .text((d) => d.name);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON:", error);
      });
  }, []);

  return (
    <svg
      id="world-map"
      ref={svgRef}
      width="800"
      height="500"
      viewBox="0 0 800 500"
    ></svg>
  );
};

export default WorldMap;
