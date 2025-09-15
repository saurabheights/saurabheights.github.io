AUTHOR = "Saurabh Khanduja"
SITENAME = "PixelPerception"
SITEURL = ""
SITELOGO = "/images/avatar-400x400.jpg"
SITETITLE = "Saurabh Khanduja"

PATH = "content"

TIMEZONE = "Europe/Berlin"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


LINKS = (("My Articles", "/index.html"),)

# Social widget
SOCIAL = (
    ("github", "https://github.com/saurabheights"),
    ("linkedin", "https://www.linkedin.com/in/saurabheights/?originalSubdomain=de"),
    ("rss", "https://saurabheights.github.io/feeds/all.atom.xml"),
)

DEFAULT_PAGINATION = 5
THEME = "themes/Flex"
SUMMARY_MAX_PARAGRAPHS = 1
DISABLE_URL_HASH = True

PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican-toc", "render_math"]

TOC = {
    "TOC_HEADERS": "^h[2-6]",
    "TOC_RUN": "true",
    "TOC_INCLUDE_TITLE": False,
}
THEME_COLOR_AUTO_DETECT_BROWSER_PREFERENCE = True


# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True