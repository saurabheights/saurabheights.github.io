Title: Setting up Portfolio Website - Integrating Comments, redesigning TOC and rendering of Latex Equation in Pelican
Date: 2025-09-11
Tags: Pelican, Table of Content, Giscus, Latex Rendering, Math Equations, Comments
Author: Saurabh Khanduja
Slug: 

Enhance your Pelican-powered blog with modern features! This guide walks you through integrating Giscus comments, an auto-generated Table of Contents and LaTeX rendering for math equations. Step by step, you’ll learn how to make your technical blog more interactive and user-friendly.

When building a personal or technical blog, the content is only half of the story—the way readers interact with it matters just as much. A smooth reading experience, easy navigation, and the ability to engage with the author can turn a static website into a lively knowledge hub.

If you’re new to Pelican and haven’t yet set up your portfolio blog, I recommend checking out my earlier blog: [How to Build a Portfolio Website with Pelican](https://building-website-using-pelican.html). That post covers the initial setup so you can follow this article without confusion.

Pelican, being a lightweight yet highly customizable static site generator, offers the flexibility to add these modern features without bloating your site. In this guide, we’ll focus on four enhancements that significantly improve the usability and appeal of a technical blog:

* **Giscus integration** to enable discussions and feedback via GitHub.

* **A responsive Table of Contents (TOC)** to help readers navigate long posts effortlessly.

* **LaTeX rendering** for displaying mathematical formulas, essential for AI/ML and scientific content.

By the end of this article, you’ll have a Pelican-powered blog that not only shares knowledge but also encourages interaction, supports complex technical writing, and adapts to your readers’ preferences.

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