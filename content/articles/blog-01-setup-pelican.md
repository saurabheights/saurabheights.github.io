Title: Deploying portfolio website using Pelican and Github Pages, Under 10 minutes.
Date: 2025-08-19
Tags: Pelican, Github Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: building-website-using-pelican

This article provides a step-by-step walkthrough on how to deploy a portfolio website using the Pelican static site generator and GitHub Pages. We'll cover the entire process, from configuration to final publication, allowing you to get your site live in under 10 minutes.

If you're an expert in your niche and want to start a blog, using a static site generator is a highly efficient method. We will cover how to build your site the old-school way, giving you full control over your content and platform.

## Roadmap
Basically what we are going to do here is using static site generator(**pelican**) to build our website and it will also helps us in future to add more blogs fast and in easy way. Now for hosting we are going to use github which will not only help us to publish our website for free but also provide various features like (automation, uploading and managing blogs). Git and github has so many amazing features that we will see and discuss later in this blog.

Pelican is a static site generator written in Python. It lets you write your content in **Markdown** or **reStructuredText**, then generates a fast, lightweight HTML website.

## Start
To get started, you'll need two main prerequisites, which many people already have: a GitHub account and Python installed on your system.

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

Once we are in the root directory of our local repository, we will install Pelican with Markdown support

```
python -m pip install "pelican[markdown]"
```

   After pelican is installed we will create a structure of the project via the `pelican-quickstart` command, which begins by asking some questions about your site.

---

### Create a sample article and generate site

We cannot run Pelican until we have created some content. Use your preferred text editor to create an article with the following content.

```
Title: My First Review
Date: 2025-08-13 10:20
Category: Review

Following is a review of my favorite mechanical keyboard.
```

Given that is an example article which is in Markdown format, save it as /username.github.io/content/keyboard-review.md

From the project root directory, run this pelican command to generate the site:

```bash
pelican content
```

Your site is now generated inside the output/ directory. To preview the site we can run the following command.

```bash
pelican --listen
```

This command generates a local web address. Navigate to `http://localhost:8000/` in your browser to see a preview of your website. Right now, pelican is using the default theme "notmyidea", but we'll be customizing this theme soon.

---

## Adding Content

In Pelican, there are two primary content types: Articles and Pages. Articles are used for chronological content like blog posts, while Pages are used for static content such as an 'About' or 'Contact' page.

So we will make separate folders for them inside the Content folder as pages, articles & images. We also added an images folder to store all images that will be used in our content.

After adding the structure of the `content` folder will look like this

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

As you can see, I've added a few static pages to the pages directory. The keyboard-review.md blog post has been moved to the articles folder, and my profile picture is now in the images directory.

---

## Adding and Configuring a New Theme

Pelican has many themes and there is a community-managed repository [Github](https://github.com/getpelican/pelican-themes) of [Pelican Themes](https://pelicanthemes.com/) for people to share and use. I chose **Flex** for its clean and responsive design.

### Download or Clone the Theme

Create a new themes/ directory in your project's root folder, then clone the theme repository directly into it.

```bash
git clone https://github.com/alexandrevicenzi/Flex.git themes/Flex
```
### Update Your Configuration
Open your pelicanconf.py file and set the theme path:
```
THEME = "themes/Flex"
```
Now generate the site again and see the new theme will be applied.

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

All our changes are currently saved locally. To sync them with GitHub and update the remote repository, use the following commands

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


With your site successfully created, you can now explore the following ways to improve it:

* Automate the Deployment Process- You can use GitHub Actions to automate the entire workflow. This allows you to automatically build and upload your blog to the website whenever you push new content to your repository. This eliminates the need to manually run commands, saving you time
* Customize Website Appearance- TYou can experiment with different themes to find the best fit for your blog. Pelican offers a wide variety of themes that you can customize to your liking.
* Add New Features with Plugins- Pelican supports many plugins that can add new functionality to your blog. For example, you can integrate Adsense for ads or Disqus for comments to enhance the user experience.
* Start a Newsletter- You can set up a newsletter to build an audience. By giving readers the option to subscribe on your homepage, you can easily share new content and updates directly with your followers.

## Conclusion/ End result

So now you have basic structure of blogging website. Now the things required to grow your blog is your hard work, dedication and blogs.