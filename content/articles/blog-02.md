Title: Enhancing my blog for Scientific Writing - Integrate Comments, Better TOC and Latex Support
Date: 2025-09-11
Tags: Pelican, Table of Content, Giscus, Latex Rendering, Math Equations, Comments
Author: Saurabh Khanduja
Slug: 

Enhance your Pelican-powered blog with modern features! This guide walks you through integrating Giscus comments, an auto-generated Table of Contents and LaTeX rendering for math equations. Step by step, you’ll learn how to make your technical blog more interactive and user-friendly.

When building a personal or technical blog, the content is only half of the story—the way readers interact with it matters just as much. A smooth reading experience, easy navigation, and the ability to engage with the author can turn a static website into a lively knowledge hub.

If you’re new to Pelican and haven’t yet set up your portfolio blog, I recommend checking out my earlier blog: [How to Build a Portfolio Website with Pelican](https://building-website-using-pelican.html). That post covers the initial setup so you can follow this article without confusion.

Pelican, being a lightweight yet highly customizable static site generator, offers the flexibility to add these modern features without bloating your site. In this guide, we’ll focus on four enhancements that significantly improve the usability and appeal of a technical blog:

* **Giscus integration** to enable discussions and feedback via GitHub.

* **A responsive Table of Content (TOC)** to help readers navigate long posts effortlessly.

* **LaTeX rendering** for displaying mathematical formulas, essential for AI/ML and scientific content.

By the end of this article, you’ll have a Pelican-powered blog that not only shares knowledge but also encourages interaction, supports complex technical writing, and adapts to your readers’ preferences.

## Adding Table Of Content

**Why it is useful**

A Table of Content (TOC) improves the readability and navigation of long technical blogs. Instead of scrolling endlessly, readers can quickly jump to the section they care about. This not only enhances user experience but also makes your articles look more professional and well-structured. On the technical side, TOC also helps with accessibility and SEO because search engines can better understand the hierarchy of your content.

### How to add TOC

To add a Table of Content in Pelican, you can use the **pelican-toc plugin**. This plugin automatically scans your article headings (`<h2>`, `<h3>`, etc.) and generates a structured TOC that appears on your page.

First, download the **pelican-toc** plugin directly from GitHub. You can do this by creating a plugins folder in your project’s root directory and cloning the plugin into it with the following command:

```bash
git clone https://github.com/ingwinlu/pelican-toc plugins/pelican-toc
```

This command will automatically create a folder named `pelican-toc` inside your `plugins` directory and place all the necessary plugin files there.

Then, in your `pelicanconf.py`, specify the plugin path and add the configuration to enable the TOC in your articles:
``` python
python
PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican-toc"]
TOC = {
    'TOC_HEADERS'       : '^h[2-4]',   # Include h2–h4 headings
    'TOC_RUN'           : 'true',      # Generate TOC for every article
    'TOC_INCLUDE_TITLE' : 'false',     # Exclude article title from TOC
}
```
Once the plugin is enabled, Pelican will generate a Table of Content (`article.toc`) for every article. However, to actually display it on your site, you need to insert the `{{ article.toc }}` tag inside your article template.

You can find the template at themes/Flex/templates/article.html. I added the TOC block inside the `<article class="single">` container in that file like this:
```html
html
{% if article.toc %}
  <div class="toc">
    <h3>Contents</h3>
    {{ article.toc }}
  </div>
{% endif %}
```

### Making it Responsive

A Table of Content is most effective when it adapts to different screen sizes. On large screens, it’s useful to keep the TOC visible as the reader scrolls, while on mobile devices it should appear closer to the top so it doesn’t take up too much space.

To achieve this, I added the following CSS to my `style.min.css`:
```css
css
@media(min-width: 1322px)
{
    main article .toc {
    margin-top: -6em
}
.toc {
    position: fixed;
    right: 20px;
    top: 100px;
    width: 250px;
    font-size: 14px;
    line-height: 1.6em;
}
.toc ul {
    list-style: none;
    padding-left: 0;
}
.toc a {
    text-decoration: none;
    color: #555;
}
.toc a:hover {
    color: #258fb8;
}
}
```
Here’s what this does:

* **On desktop (width ≥ 1322px)**: the TOC is fixed on the right side (`position: fixed`), so it always stays visible as the reader scrolls.

* **On mobile**: the TOC falls back to its normal flow inside the article, appearing just under the title. As the reader scrolls, it moves upward with the rest of the content (instead of sticking).

This way, the TOC feels like a floating sidebar on desktop but a natural part of the content on mobile.

### Adding Scrollspy

A TOC becomes even more powerful when readers can see which section they’re currently reading. This is where **scroll-spy** comes in. It highlights the active heading in the TOC as the reader scrolls through the article.

Why scrollspy is useful:

* Provides visual feedback so the reader always knows “where they are” in the article.

* Improves navigation, especially for long technical posts.

* Enhances the professional feel of the blog (common in documentation sites).

To implement scroll-spy, I added the following script inside my `article.html` file at the end.
```html
html
<script>
document.addEventListener("DOMContentLoaded", function() // Wait until DOM is loaded
{
  const tocLinks = document.querySelectorAll(".toc a"); // Get all TOC links
  const sections = Array.from(tocLinks)                 // Map TOC links to sections
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(el => el);                                  // Remove invalid ones

  const observer = new IntersectionObserver(entries => { // Create observer for sections
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");       // Get ID of current section
      if (entry.isIntersecting) {                       // If section is visible
        tocLinks.forEach(link => link.classList.remove("active")); // Clear old highlights
        const activeLink = document.querySelector(`.toc a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active"); // Highlight current link
      }
    });
  }, {
    rootMargin: "-20% 0px -60% 0px",                    // Adjust sensitivity (top/bottom)
    threshold: 0                                        // Trigger as soon as visible
  });

  sections.forEach(section => observer.observe(section)); // Observe each section
});
</script>
```

## LaTeX rendering

Technical blogs often require mathematical equations, especially in fields like AI/ML, computer vision, or data science. Pelican doesn’t natively render LaTeX, but with the `render_math` **plugin**, you can easily add inline equations (e.g., `$E = mc^2$`) and block-level math expressions. This ensures your blog looks professional and communicates technical ideas clearly.

### Installing the Plugin

Just like with `pelican-toc`, you’ll first need to download the **render_math** plugin from Github into your `plugins` directory. Run the following command:
```bash
bash
git clone https://github.com/getpelican/pelican-plugins plugins/render_math
```

This will create a `render_math` folder inside your `plugins` directory.

Enabling the Plugin

Next, open your `pelicanconf.py` and add `render_math` to your plugin configuration:
``` python
python
PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican-toc", "render_math"]
``` 

That’s all you need for setup. The plugin automatically integrates **MathJax** into your site and renders LaTeX expressions inside your articles.

### Writing LaTeX in Articles

Once enabled, you can use LaTeX syntax inside your Markdown or reStructuredText files:

* **Inline math:** This is an inline equation $E = mc^2$ inside a sentence.


* **Block math:**

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}
$$


The plugin will automatically render these using MathJax when your page loads.


## Adding Giscus (Comments System)

One of the best ways to make your blog engaging is to enable readers to share their thoughts, ask questions, and provide feedback directly on your blog. Traditionally, many static sites relied on Disqus for comments, but over time it has gained a reputation for being heavy, privacy-invasive, and ad-driven.

A better alternative is Giscus, a modern, lightweight, and privacy-friendly comment system that integrates seamlessly with GitHub Discussions. Since most technical readers already have GitHub accounts, it becomes natural for them to join the conversation.

**Why Giscus is Better than Disqus**

* **Privacy First**: Unlike Disqus, which tracks users and shows ads, Giscus does not collect personal data or inject unwanted ads into your blog.

* **GitHub Integration**: Every comment is stored as a GitHub Discussion in your repository, meaning your readers’ feedback lives alongside your code and is easy to moderate.

* **Lightweight**: Giscus is just a small JavaScript snippet and doesn’t bloat your site with external trackers or slow-loading scripts.

* **Open Source**: Being open-source, it is transparent and community-driven, unlike Disqus which is a closed platform.

### Installing Giscus

Assuming your website is already live, the first step is to install the Giscus GitHub App.

* Go to the [Giscus app page on GitHub](https://github.com/apps/giscus)
* Click Install.
* Choose Your Account.
* Select the repository where your website is hosted in our case it should be like this username.github.io

**Enabling Discussions in Your Repository**

* Before Giscus can work, you need to enable Discussions in the target repository.
* Go to your GitHub repository.
* Click on **Settings** (upper right).
* Scroll down to the **Features** section.
* Check the box for **Discussions**.

**Setting Up Discussions**

Once Discussions are enabled:

* Click on Set up discussions.
* Add an announcement if you’d like.(Optional)
* Open the new Discussions tab (it should now appear at the top).
* On the left, under Categories, click the pencil icon.
* Add a new category, for example: Portfolio Comments
* For the format, select Open-ended discussion.
* Click Create

### Giscus Configuration

Setting up Giscus is straightforward. Head over to [Giscus.app](https://giscus.app/) and scroll down to the Configuration section. Here you need to give it the path to your repo which will have a URI of your Github profile path followed by a slash and then the repo name. For mine this was **saurabheights/saurabheights.github.io**. If the repository is set up correctly, you’ll see a success message.

For the mapping, choose **Discussion title contains page pathname**. This option works well for blogs because it automatically links each article’s unique URL to its corresponding discussion thread, avoiding duplicates.

Next, select the Discussion Category you created earlier (e.g., *Portfolio Comments*), and keep the “Only search for discussions in this category” option checked. I also enabled **reactions for the main post** so readers can leave quick feedback in addition to comments.

You can experiment with the other options if you like, but I left the theme on its default setting for consistency.

**Adding Giscus Embed Code to Pelican**

After completing the configuration on [Giscus.app](https://giscus.app/), scroll down to the **Enable giscus** section. You’ll find a generated JavaScript snippet that initializes the comment system. Copy this block of code and integrate it into your site template.
```
<script src="https://giscus.app/client.js"
        data-repo="saurabheights/saurabheights.github.io"
        data-repo-id="R_kgDOKBLy1g"
        data-category="Portfolio Comments"
        data-category-id="DIC_kwDOKBLy1s4CvAE2"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>

```
For Pelican, the most appropriate place to embed the comments is at the end of each article. To achieve this, open your theme’s *article.html* template and locate the closing block for the article content. Paste the Giscus script just below the article body, but before the closing `</article>` tag. This placement ensures that the component inherits the layout, styles, and responsiveness provided by Pelican’s rendering system.

Finally, rebuild your Pelican site `(pelican content)` and refresh your blog — you should now see the Giscus comment box rendered at the bottom of every article.