Title: How to Add D3.js Graphs to Your Pelican Blog for Interactive Visualizations
Date: 2025-08-19
Tags: Pelican, GitHub Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: add-d3.js for interactive visualization

In the previous parts, we explored how to add several powerful features to our Pelican blog. But what if you want to make your posts even more engaging with interactive charts and data visualizations? That’s where D3.js comes in.

[D3.js](https://d3js.org/) (Data-Driven Documents) is a powerful JavaScript library that lets you create dynamic, interactive visualizations directly in your web pages using HTML, SVG, and CSS.

In this tutorial, we’ll go step-by-step through the process of integrating D3.js into a Pelican site — from setup to displaying your first animated graph — so you can bring your data stories to life.

## Project Setup

In the [previous part of this series](https://saurabheights.github.io/enhancing-my-blog-for-scientific-writing-integrate-comments-better-toc-and-latex-support.html), we already set up our Pelican blog — created the content folders, configured the theme, and added features like a table of contents, Giscus comments, and LaTeX rendering.

Now, we’ll prepare our project for adding **interactive D3.js graphs.**

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

In the `js` **folder**, we’ll place all our graph scripts, such as
`blog-01-graph.js`, `blog-02-graph.js`, and so on.
Each blog can have its own JavaScript file that handles a specific D3 visualization.

In the `css` **folder**, we’ll include only **one main CSS file** (for example, `graph-style.css`) that defines the styles for all the graphs across the site.

This setup keeps things organized — each blog gets its own script file, while all visual styling is handled in one place.

---

## Include D3.js in Base Template

Previously, we added tools like **Giscus** by modifying `article.html`, which made them available only inside individual posts. However, this time we’ll integrate **D3.js** inside the `base.html` file — allowing us to use graphs anywhere across the website, not just in articles.

To make Pelican automatically load every graph script from your `extra/js` folder (without updating `base.html` every time you add a new graph), add the following lines inside your `base.html` file:

``` html
<!-- D3.js Library -->
<link rel="stylesheet" href="extra/css/graph-style.css">
<script src="https://d3js.org/d3.v7.min.js"></script>

<!-- Auto-load all D3 graph scripts -->
{% for js_file in js_files %}
  <script src="{{ SITEURL }}/extra/js/{{ js_file }}"></script>
{% endfor %}

```
And to make this auto-loading work, include these settings inside your `pelicanconf.py` file:

``` python
STATIC_PATHS = ['extra/js', 'extra/css']

JS_FILES = [f for f in os.listdir('content/extra/js') if f.endswith('.js')]

# Make JS files accessible inside Jinja templates
JINJA_GLOBALS = {
    'js_files': JS_FILES
}
```
This setup ensures Pelican dynamically reads all **.js** files from your `extra/js` folder and includes them in your site automatically — so you never need to manually update `base.html` again when adding new graphs.

---

## Create Your First Graph Script

Now let’s create our first D3 graph file — for example, `blog-01-graph.js.`
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
Then, in your **Markdown file** where you want the graph to appear, add:

```html 
<div id="test-graph"></div>
```
Finally, rebuild your Pelican site — and you should see a blue circle rendered on your page!

---

## Organize Styles

Keep all your graph-related styles inside a single file — for example, `graph-style.css` — located in your `content/extra/css/` folder.
This file controls how your D3 charts look — from colors to animations — and keeps everything consistent across your website.

Here’s a simple example you can include in your `graph-style.css`:
``` css
/* D3 Bar Chart Styling */
#test-graph .bar {
  fill: #FF8DA1; /* 🎨 Your pink color */
  transition: fill 0.3s ease, height 0.3s ease;
}

/* Optional: hover effect */
#test-graph .bar: hover {
  fill: #ff6f91; /* slightly darker on hover */
}
```

### Why one CSS file?

* The browser **downloads and caches** it once — improving load time.

* You can manage all graph styling in a single place.

* It keeps your repo clean and avoids duplicate rules across files.

So whenever you add a new graph, you can just tweak `graph-style.css` — no need to create or reload multiple CSS files.