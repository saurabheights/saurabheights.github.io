// Global reusable tooltip
const tooltip = d3.select("body")
  .append("div")
  .attr("class", "d3-tooltip")
  .style("opacity", 0);

// Blue circle test graph
document.addEventListener("DOMContentLoaded", function () {
  const svg = d3.select("#blog-01-graph-test")
                .append("svg")
                .attr("width", 300)
                .attr("height", 150);

  svg.append("circle")
     .attr("cx", 150)
     .attr("cy", 75)
     .attr("r", 50)
     .attr("fill", "steelblue");
});

// Bar Graph Code
document.addEventListener("DOMContentLoaded", function () {
  // Basic dataset
  const data = [30, 80, 45, 60, 20, 90, 50];

  // Set up SVG dimensions
  const width = 600;
  const height = 500;
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
 
// Line Graph Code
document.addEventListener("DOMContentLoaded", function () {

  // Dataset (same style as bar chart)
  const data = [30, 50, 40, 70, 60];

  // SVG dimensions (wider than before)
  const width = 600;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Create SVG (responsive-friendly)
  const svg = d3.select("#line-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // X scale — spreads points evenly across width
   const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  // Y scale
  const y = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height - margin.bottom, margin.top]);

  // Line generator
  const line = d3.line()
    .x((d, i) => x(i) + x.bandwidth() / 2) // center in band
    .y(d => y(d));

  // Draw line
  const path = svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "orange")
    .attr("stroke-width", 2.5)
    .attr("d", line);
    // Draw circles at data points for tooltip
svg.selectAll(".line-point")
  .data(data.map((d, i) => ({ x: i + 1, y: d }))) // bind both x and y
  .enter()
  .append("circle")
  .attr("class", "line-point")
  .attr("cx", d => x(d.x - 1) + x.bandwidth() / 2)
  .attr("cy", d => y(d.y))
  .attr("r", 5)
  .attr("fill", "orange")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("fill", "yellow");
    tooltip
      .style("opacity", 1)
      .html(`(${d.x}, ${d.y})`);
  })
  .on("mousemove", function (event) {
    tooltip
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 20) + "px");
  })
  .on("mouseout", function () {
    d3.select(this).attr("fill", "orange");
    tooltip.style("opacity", 0);
  });
  // Optional animation (draw effect)
  const length = path.node().getTotalLength();
  path
    .attr("stroke-dasharray", `${length} ${length}`)
    .attr("stroke-dashoffset", length)
    .transition()
    .duration(1200)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);

  // X-axis
svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickFormat(i => i + 1)) // Use i+1 for labels
  .attr("font-size", "12px");

  // Y-axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .attr("font-size", "12px");

});

// Scatter Plot Code
document.addEventListener("DOMContentLoaded", function () {

  // Generate dense random data (e.g. embeddings / features)
  const data = Array.from({ length: 60 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Dimensions
  const width = 600;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Create responsive SVG
  const svg = d3.select("#scatter-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", width)
    .style("height", height);

  // Scales
  const x = d3.scaleLinear()
    .domain([0, 100])
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top]);

  // Draw points with animation
  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.x))
    .attr("cy", height - margin.bottom)
    .attr("r", 0)
    .attr("fill", "orange")
    .attr("opacity", 0.8)


    .on("mouseover", function (event, d) {
      d3.select(this)
        .attr("r", 8)
        .attr("fill", "yellow");

      tooltip
        .style("opacity", 1)
        .html(`(${d.x.toFixed(0)}, ${d.y.toFixed(0)})`);
        

    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", function () {
      d3.select(this)
        .attr("r", 5)
        .attr("fill", "orange");

      tooltip.style("opacity", 0);
    })
    .transition()
    .duration(800)
    .delay((d, i) => i * 15)
    .attr("cy", d => y(d.y))
    .attr("r", 5);

  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  // Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));
});

// Pie Chart Code
document.addEventListener("DOMContentLoaded", function () {

  // Dataset (class distribution / proportions)
  const data = [
    { label: "Class A", value: 40 },
    { label: "Class B", value: 25 },
    { label: "Class C", value: 20 },
    { label: "Class D", value: 15 }
  ];

const width = 600;
const height = 500;
  const radius = Math.min(width, height) / 2 - 10;

  // Calculate total for percentage
  const total = d3.sum(data, d => d.value);

  // SVG container
  const svg = d3.select("#pie")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "auto")
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // Color scale
  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.label))
    .range(d3.schemeCategory10);

  // Pie generator
  const pie = d3.pie()
    .value(d => d.value);

  // Arc generator
  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  // Draw slices
  svg.selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", d => color(d.data.label))
    .on("mouseover", function (event, d) {
      const percent = ((d.data.value / total) * 100).toFixed(0);

      d3.select(this)
        .transition()
        .duration(150)
        .attr("transform", "scale(1.05)");

      tooltip
        .style("opacity", 1)
        .html(`${percent}%`);
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", (event.clientX + 10) + "px")
        .style("top", (event.clientY + 10) + "px");
    })
    .on("mouseout", function () {
      d3.select(this)
        .transition()
        .duration(150)
        .attr("transform", "scale(1)");

      tooltip.style("opacity", 0);
    })
    .transition()
    .duration(1000)
    .attrTween("d", function (d) {
      const interpolate = d3.interpolate(
        { startAngle: 0, endAngle: 0 },
        d
      );
      return t => arc(interpolate(t));
    });

});
