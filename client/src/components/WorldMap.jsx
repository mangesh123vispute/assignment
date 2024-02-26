import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const WorldMap = () => {
  const svgRef = useRef(null);

  const sampleData = [
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
          .attr("fill", "#40E0D0") // Adjust point color as needed
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
