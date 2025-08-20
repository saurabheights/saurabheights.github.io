Title: How to publish your first blog in less then 10min & that to free of cost.
Date: 2025-08-19
Tags: Pelican, Github Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: building-website-using-pelican

Yes you heard it right publishing blog is that easy and it cost not a penny to start. We are not gonna use any AI tools to upload, publish, or build our blogs

We are going to do this old school way using static site and static site generator. So suppose you have an idea or you are really good in a perticular niche and you want to start educating people or show your work then blogging is a best way to do it.

## Roadmap
Basically what we are going to do here is using static site generator(**pelican**) to build our website and it will also helps us in future to add more blogs fast and in simple easy way. Now for hosting we are going to use github which not only help to publish our website for free but also provide various features like (automation, uploading and managing blogs). Git and github has so many amazing features that we will see and discuss later in this blog.

Pelican is a static site generator written in Python. It lets you write your content in **Markdown** or **reStructuredText**, then generates a fast, lightweight HTML website.`

## Start
Okay to start building your website you need few things which I guess many people have this already and if you don't have no worries its nothing.
* Github account
* Python installed

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

### Download or Clone the Theme

You can use Git to clone directly into the themes/ folder:
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


After you successfully created your first blog you can try out different from here for example.

* Automate the whole process- Using github actions to upload the blog using pelican and update in the website
* Play with different theme- To test which theme works best for you, there are many theme provided by pelican which can be customized by our choice.
* Use the plugins- There are many plugins supported by pelican which can be used to improve your blog. (Adsense, Disqus)
* Newsletter- You can run newsletter by giving readers the option to subscribe it whenever they land on your homepage.

## Conclusion/ End result

So now you have basic structure of blogging website. Now the things required to grow your blog is your hard work, dedication and blogs.
