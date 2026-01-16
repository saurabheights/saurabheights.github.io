Title: Integrating D3.js to our blogs for Interactive Visualizations
Date: 2025-10-22
Tags: Pelican, GitHub Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: add-d3.js for interactive visualization

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
  const svg = d3.select("#test-graph")
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
<div id="test-graph"></div>
```

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
