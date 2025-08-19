Title: How I Built My Personal Website Using Pelican and GitHub Pages
Date: 2025-08-19
Tags: Pelican, Github Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: building-website-using-pelican

If you’ve ever wanted to create a **fast, free, and customizable website** without touching too much backend code, **Pelican** is an amazing choice. In this blog, I’ll walk you through how I made my own site using **Pelican + GitHub Pages**, along with a custom theme.

---

## Why I Chose Pelican

Pelican is a static site generator written in Python. It lets you write your content in **Markdown** or **reStructuredText**, then generates a fast, lightweight HTML website.  
The best part? You can host it for free on GitHub Pages.

---

## Installing Pelican

### Create a GitHub Repository for Hosting

1. Logged into GitHub and created a **new repository**.  
2. Named it: `username.github.io` (replace with your GitHub username).  
3. Enabled **GitHub Pages** in repository settings.

---

### Set Up Pelican Locally

### Cloned the repository into the local system

```
git clone https://github.com/username/username.github.io
cd username.github.io
```

### Install Pelican

 Once we are inside the repository in our local system we will install pelican with markdown support.

```
python -m pip install "pelican[markdown]"
```

   After pelican is installed we will create a structure of the project via the `pelican-quickstart` command, which begins by asking some questions about your site.

---

### Create a test article and generate site

We cannot run Pelican until we have created some content. Use your preferred text editor to create your first article with the following content here I am using markdown:

```
Title: My First Review
Date: 2025-08-13 10:20
Category: Review

Following is a review of my favorite mechanical keyboard.
```

Given that this example article is in Markdown format, save it as /username.github.io/content/keyboard-review.md

### Generate the site

From the project root directory, run the pelican command to generate your site:

```bash
pelican content
```

Your site has now been generated inside the output/ directory. To preview the site we can run the following command.

```bash
pelican --listen
```

The command you just ran generates a local web address. Navigate to `http://localhost:8000/` in your browser to see a preview of your website. Right now, it's using the standard "notmyidea" theme, but we'll be customizing that soon.

---

## Adding Content

Now we will add content, since Pelican consider Articles to be chronological content such as Blog and Pages is for adding static page like *About* or *Contact* page.

So we will make separate folders for them inside the Content folder as pages, articles & images. We added images folder so that we can add the images which are going to be used in future.

After adding the folders the structure of the `content` folder will look like this

``` vbnet
content/
├── pages/
│   ├── about-me.md
│   ├── contact-me.md
├── articles/
│   ├── keyboard-review.md
├── images/
│   ├── avatar.jpg
```

Here, you can see I've added a few static pages inside the pages folder. I've also moved the keyboard-review.md blog post into the articles folder and added my profile picture to the images folder.

---

## Add and configure the theme

Pelican has many themes and there is a community-managed repository [Github](https://github.com/getpelican/pelican-themes) of [Pelican Themes](https://pelicanthemes.com/) for people to share and use. I chose **Flex** for its clean, responsive design.

## Customize the theme

The theme can be customized by editing the templates and stylesheet present inside the theme folder (/theme/Flex)

Before doing any customization I ran a command to see the real time changes that ae happening on the website

```bash
pelican content
pelican --autoreload --listen
```

Here are the list of changes which I have done in *pelicanconf.py*

* To add a profile picture I added `SITELOGO= '/images/avatar.jpg'`
* To add title I added `SITETITLE= 'Hey, I am Saurabh Khanduja'`
* Social widgets can also added `SOCIAL = ("github", "https://github.com/saurabheights")`

We can adjust font size, colors etc in the theme's folder `style.min.css`

---

## Commit & Push changes to github

All the changes we've made so far are saved only on our local computer. To update our project on GitHub and add all our new files, we'll use the following commands.

```bash
git add .
git commit -m "Initial Pelican site with customized Flex theme"
git push origin main
```

---

## Enable GitHub Pages

* Go to your GitHub repo’s **Settings → Pages**.
* Select the main branch and `/ (root)` folder.

* Save the settings, and your site will be live at: `https://username.github.io`
