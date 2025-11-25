document.addEventListener("DOMContentLoaded", function () {
  // Basic dataset
  const data = [30, 80, 45, 60, 20, 90, 50];

  // Set up SVG dimensions
  const width = 500;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Create SVG
  const svg = d3.select("#d3-test")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create scales
  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data)]) // input range (data)
    .range([height - margin.bottom, margin.top]); // output range (pixels)

  // Draw bars with animation
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => x(i))
    .attr("y", height - margin.bottom) // start from bottom
    .attr("width", x.bandwidth())
    .attr("height", 0) // start height 0 for animation
    .attr("fill", "yellow")
    .transition() // animate the bars
    .duration(1000)
    .delay((d, i) => i * 150) // stagger the animation
    .attr("y", d => y(d))
    .attr("height", d => y(0) - y(d));

  // Add X-axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => i + 1))
    .attr("font-size", "12px");

  // Add Y-axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .attr("font-size", "12px");
});
