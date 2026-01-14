Title: Deploying portfolio website using Pelican and Github Pages, Under 10 minutes
Date: 2025-08-19
Tags: Pelican, Github Pages, SSG, Web Development, Hosting
Author: Saurabh Khanduja
Slug: building-website-using-pelican

This article provides a step-by-step walkthrough on how to deploy a personal portfolio website using the Pelican, a static site generator and GitHub Pages.

If you're an expert in your niche and want to start a blog, using a static site generator is a highly  efficient method. A static site generator generates all webpages beforehand, and hence you do not need to generate these pages dynamically. We will cover how to build your site the old-school way, giving you full control over your content and platform.

## Roadmap

Since, I work in python, I chose to go with [Pelican](https://getpelican.com/) to build my website. Pelican is a static site generator written in Python. It lets you write your content in **Markdown** or **reStructuredText**, then generates a fast, lightweight HTML website. Furthermore, we will use github which will provide:

1. Storing source code of our website.
2. Github actions to automatically build and deploy website.
3. Publishing our website for free.
4. Easy comment section support using github discussions tab.

To get started, you'll need two main prerequisites, which many people already have: a GitHub account and Python installed on your system.

## Installing Pelican

### Create a GitHub Repository for Hosting

1. Logged into GitHub and create [a new repository](https://github.com/new).
2. Name it: `username.github.io`. Replace `username` with your GitHub username.

### Set Up Pelican Locally

### Cloned the repository into the local system

```bash
# Replace saurabheights with your github username
export USERNAME=saurabheights
git clone https://github.com/$USERNAME/$USERNAME.github.io
cd $USERNAME.github.io
```

### Install Pelican

We will install Pelican in our virtual environment `portfolio` using conda. 

```bash
conda create -n portfolio -y python=3.12
conda activate portfolio
python -m pip install "pelican[markdown]"
```

### Create Website using Pelican template

After pelican is installed we will create a structure of the project via the `pelican-quickstart` command, which begins by asking some questions about your site. The below code shows example I followed for my own website setup.

```bash
pelican-quickstart 
Welcome to pelican-quickstart v4.11.0.post0.

This script will help you create a new Pelican-based website.

Please answer the following questions so this script can generate the files
needed by Pelican.

    
> Where do you want to create your new web site? [.] .
> What will be the title of this web site? My Personal Blog
> Who will be the author of this web site? Saurabh Khanduja
> What will be the default language of this web site? [en] 
> Do you want to specify a URL prefix? e.g., https://example.com   (Y/n) Y
> What is your URL prefix? (see above example; no trailing slash) https://saurabheights.github.io
> Do you want to enable article pagination? (Y/n) Y
> How many articles per page do you want? [10] 4
> What is your time zone? [Europe/Rome] 
> Do you want to generate a tasks.py/Makefile to automate generation and publishing? (Y/n) Y
> Do you want to upload your website using FTP? (y/N) N
> Do you want to upload your website using SSH? (y/N) N
> Do you want to upload your website using Dropbox? (y/N) N
> Do you want to upload your website using S3? (y/N) N
> Do you want to upload your website using Rackspace Cloud Files? (y/N) N
> Do you want to upload your website using GitHub Pages? (y/N) y
> Is this your personal page (username.github.io)? (y/N) y
Done. Your new project is available at /home/sk/saurabheights.github.io
```

## Generate Site

From the project root directory, run this pelican command to generate the site:

```bash
pelican content
Done: Processed 1 article, 0 drafts, 0 hidden articles, 2 pages, 0 hidden pages and 0 draft pages in 0.05 seconds.
```

Your site is now generated inside the `output/` directory. To preview the site we can run the following command.

```bash
 pelican --listen
```

This command generates a local web address. Navigate to [http://localhost:8000/](http://localhost:8000/) in your browser to see a preview of your website. Right now, pelican is using the default theme "notmyidea", but we'll be customizing this theme soon.


### Setup Live Reload

As done above, to see the results of any changes, we have to rerun pelican to build website. This is followed with refreshing browser webpage. We can speed this up by utilizing live/hot reload option. This feature works by detecting file changes in content directory, followed with refreshing browser tab automatically. Just make sure to save your file to trigger live reload feature.

```bash
pip install invoke livereload
invoke livereload  # Executes livereload task in tasks.py which runs a server that refreshes browser upon any file changes.
```

### Adding Content

Pelican organizes content mainly into Articles and Pages.
Each type serves a different purpose and is stored in its own folder inside the content directory.

#### Pages (Static Content)

Pages are meant for content that does not change frequently and is not time based. The common use cases are: About Me, Contact, Projects, Resume, 404 Error Page. These pages usually appear in the navigation menu and stay fixed. Let's create a few pages.

**About Me page**

File path: `content/pages/about-me.md`

Example content:

```markdown
Title: About Me
Save_as: about.html
URL: about

Hi, I'm Saurabh Khanduja
I build intelligent systems that see and think. 
I write about Computer Vision, Object Re-ID, and the craft of AI Engineering.
```

This will generate a page at url username.github.io/about.

**Contact page**

File path: `content/pages/contact-me.md`

Example content:

```markdown
Title: Contact Me
Save_as: contact.html
URL: contact

Hi there! I'd love to hear from you.

You can reach me at:
* **Email**: [hello@example.com](mailto:hello@example.com)
* **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/yourprofile)
* **GitHub**: [github.com/yourusername](https://github.com/yourusername)
```
What this does: Just like the About Me page, this creates a static Contact page at username.github.io/contact


#### Articles (Blog Posts)

Articles are time-based and appear in reverse chronological order (newest first). These usually show up on the homepage and blog feed. Common use cases: Blog posts, News updates, Tutorials, Recipes, etc.

Example: **Blog Article**

File path: `content/articles/keyboard-review.md`

Example content:

```markdown
Title: My First Review
Date: 2025-08-13 10:20
Category: Review

Following is a review of my favorite mechanical keyboard.
```

#### Images Folder (Shared Assets)

The images folder is used to store all images that will be reused across our website, such as profile pictures, banners, and images inside articles or pages.

Pelican automatically copies everything inside `content/images/` to the final website output.

#### Adding a Profile Picture

Many Pelican themes support displaying a profile picture using the `SITELOGO` setting, since our chosen theme requires this, we will add profile picture to the directed folder now.

Add the image: Place your avatar image inside `content/images/avatar.jpg`

Open `pelicanconf.py` and add
```python
SITELOGO = "/images/avatar.jpg"
```
What this does

* Tells the theme where your profile image is located

*  The image is usually shown in the header or sidebar (theme-dependent)

With all files in place, here is how our final folder structure should appear

```bash
tree content
content/
├── pages/
│   ├── about-me.md
│   ├── contact-me.md
├── articles/
│   ├── keyboard-review.md
├── images/
│   ├── avatar.jpg

```

### Adding and Configuring a New Theme

Pelican has many themes and there is a community-managed repository [Github](https://github.com/getpelican/pelican-themes) of [Pelican Themes](https://pelicanthemes.com/) for people to share and use. I chose **Flex** for its clean and responsive design.

#### Download the Theme

Let’s clone the theme repository to `themes/Flex` directory.

```bash
git clone https://github.com/alexandrevicenzi/Flex.git themes/Flex
```

#### Update Your Configuration

Open your `pelicanconf.py` file and set the new theme and output directory. The output directory is changed since github only supports serving website using docs directory.

```
THEME = "themes/Flex"
OUTPUT_PATH = "docs/"
```

Now generate the site again and see the new theme will be applied.

```bash
pelican content && pelican --listen
```

#### Customize the theme

The theme can be customized by editing the templates and stylesheet present inside the theme folder (`/themes/Flex`). Here are the list of changes which I have done in [*pelicanconf.py*](http://pelicanconf.py/):

- Social widgets can also be added via: `SOCIAL = ("github", "<https://github.com/saurabheights>")`
- Update your name to appear on the left sidebar, add: `SITETITLE= 'Saurabh Khanduja'`

We can adjust font size, colors etc in the theme's folder `style.min.css`

## Make Site Live

All our changes are currently saved locally. To sync them with GitHub and update the remote repository, use the following commands:

```bash
git add docs/ content/ themes/ Makefile pelicanconf.py publishconf.py tasks.py
git commit -m "Add initial version of my portfolio website"
git push origin main
```

**Enable GitHub Pages**

- Go to your GitHub repo’s **Settings → Pages**.
- Select the main branch and  `docs/` folder.
- Save the settings, and your site will be live at: `https://$USERNAME.github.io`

## Conclusion/ End result

So now we have a basic structure of blogging website. In follow up blogs, we will add a few other features such as Comment section, Latex Support to easily render equations, and more.