Title: Integrating D3.js to our blogs for Interactive Visualizations
Date: 2025-10-22
Tags: Pelican, GitHub Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: add-d3.js-for-interactive-visualization
graph: blog-03-graph.js

In the previous parts, we explored how to add several powerful features to our Pelican blog. But what if you want to make your posts even more engaging with interactive charts and data visualizations? That’s where D3.js comes in.

[D3.js](https://d3js.org/) (Data-Driven Documents) is a powerful JavaScript library that lets you create dynamic, interactive visualizations directly in your web pages using HTML, SVG, and CSS.

In this tutorial, we’ll go step-by-step through the process of integrating D3.js into a Pelican site, from setup to displaying your first animated graph, so you can bring your data stories to life.

## Project Setup

In the [previous part of this series](https://saurabheights.github.io/enhancing-my-blog-for-scientific-writing-integrate-comments-better-toc-and-latex-support.html), we already set up our Pelican blog, created the content folders, configured the theme, and added various features like a table of contents, Giscus comments, and LaTeX rendering.

Now, we’ll prepare our project for adding **interactive D3.js graphs**.

Inside the `content` folder, create an `extra` directory that will store everything related to your graphs:

```
content/
  └──articles
  └──pages
  └── extra/
      └── js/
          ├──blog-01-graph.js
          ├──blog-02-graph.js
      └── css/
          └──graph-style.css
```

In the `js` **folder**, we’ll place all our graph scripts, such as `blog-01-graph.js`, `blog-02-graph.js`, and so on. Each blog can have its own JavaScript file that handles a specific D3 visualization.

In the `css` **folder**, we’ll include only **one main CSS file** (for example, `graph-style.css`) that defines the styles for all the graphs across the site. Rather than loading CSS on the fly for each graph, this approach loads all the styles in advance so charts never appear unstyled. Moreover, this ensures that my styling guidelines are applied uniformly across every blog entry and future changes to website themes are easy to make.

This setup keeps things organized where each blog gets its own script file, while all visual styling is handled in one place.

## Include D3.js in Article Template

Earlier, to add **Giscus** in all our blogs, we inserted Giscus-load script in `article.html` which stores templates 
for article-style pages like blogs. Similarly, for **D3.js**, we include the D3 library and its stylesheet inside 
`article.html`, allowing each blog to load its own graph scripts independently.

However, instead of loading all graphs in `js` directory, we load only the graphs needed for a given blog. 
To do this, we define a custom `graph` key in each article’s metadata (for e.g. `graph: blog-01-graph-01.js, 
blog-01-graph-02.js`). This ensures each post loads just the visualizations it needs reducing memory needs and 
improves website performance.

Add the following code inside your `article.html` file:

``` html
<!-- Load D3.js Library and graph scripts for this blog if present -->
<link rel="stylesheet" href="extra/css/graph-style.css">
<script src="https://d3js.org/d3.v7.min.js"></script> 
{% if article.graph %}
  {% for g in article.graph.split(',') %}
    <script src="{{ SITEURL }}/extra/js/{{ g|trim }}"></script>
  {% endfor %}
{% endif %}
```
We add the Jinja **for loop** to make the setup reusable across multiple blogs. Instead of hardcoding each graph file, this loop automatically loads any number of graph scripts listed in a post’s metadata. This means you can reuse the same visualization (like `blog-01-graph.js`) in different posts without editing the template again, keeping your workflow flexible and scalable.

To let Pelican know where your graph files are stored, add the following settings inside your `pelicanconf.py` file:


``` python
STATIC_PATHS = ['extra/js', 'extra/css']
```

## Create Your First Graph Script

Now let’s create our first D3 graph file for example, `blog-01-graph.js.`
Inside your `content/extra/js/` folder, add the following simple script:

``` js
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
```

In your **Markdown file**, add the graph name in metadata like:
```makefile
Title: Integrating D3.js to our blogs for Interactive Visualizations
Date: 2025-10-22
Tags: Pelican, GitHub Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: add-d3.js for interactive visualization
graph: blog-01-graph.js
```
Then place a target div where you want it to appear:

```html 
<div id="blog-01-graph-test"></div>
```

<div id="blog-03-graph-test"></div>

!!! tip 
    **Live Reload for D3.js Graphs:** If you already configured livereload in this blog: [How to Build a Portfolio Website with Pelican](https://saurabheights.github.io/building-website-using-pelican.html#setup-live-reload), update your `tasks.py` file like this:

    ```
    content_file_extensions = [".md", ".rst", ".css", ".js"]
    ```

    This allows Pelican to reload the page automatically when you change JavaScript or CSS files.

## More complex examples

### Bar Chart

<div id="blog-03-bar-graph"></div>

<details>
<summary><b>Sample Code</b></summary>

``` js
// Bar Chart Code
document.addEventListener("DOMContentLoaded", function () {
  // Basic dataset
  const data = [30, 80, 45, 60, 20, 90, 50];

  // Set up SVG dimensions
  const width = 500;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Create SVG
  const svg = d3.select("#blog-01-bar-graph")
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
```
</details>

### Line Chart

<div id="blog-03-line-graph"></div>


<details>
<summary><b>Sample Code</b></summary>


``` js
// Line Chart Code
document.addEventListener("DOMContentLoaded", function () {

  // Dataset
  const data = [30, 50, 40, 70, 60];

  // SVG dimensions (wider than before)
  const width = 600;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Create SVG (responsive-friendly)
  const svg = d3.select("#blog-01-line-graph")
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
```
</details>

### Scatter Plot

<div id="blog-03-scatter-chart"></div>


<details>
<summary><b>Sample Code</b></summary>

``` js
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
  const svg = d3.select("#blog-01-scatter-chart")
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
```
</details>

### Pie Chart

<div id="blog-03-pie-chart"></div>

<details>
<summary><b>Sample Code</b></summary>

``` js
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
  const svg = d3.select("#blog-01-pie-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", width)
    .style("height", height)
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
```
</details>

## Organize Styles

Keep all your graph-related styles inside a single file for example, `graph-style.css` located in your `content/extra/css/` folder.
This file controls how your D3 charts look, from colors to animations and keeps everything consistent across your website.

Here’s a simple example you can include in your `graph-style.css`:
``` css
/* D3 Bar Chart Styling */
#test-graph .bar {
  fill: #FF8DA1; 
  transition: fill 0.3s ease, height 0.3s ease;
}

/* Optional: hover effect */
#test-graph .bar: hover {
  fill: #ff6f91;
}
```

### Why one CSS file?

* The browser **downloads and caches** it once which improves load time.

* You can manage all graph styling in a single place.

* It keeps your repo clean and avoids duplicate rules across files.

So whenever you add a new graph, you can just tweak `graph-style.css` no need to create or reload multiple CSS files.
