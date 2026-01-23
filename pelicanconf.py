from pathlib import Path
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
PLUGINS = ["pelican-cite", "render_math","pelican-toc"]

TOC = {
    "TOC_HEADERS": "^h[2-6]",
    "TOC_RUN": "true",
    "TOC_INCLUDE_TITLE": False,
}
THEME_COLOR_AUTO_DETECT_BROWSER_PREFERENCE = True

MARKDOWN = {
    'extensions': [
        'admonition', # Admonition blocks
        'toc',        # Table of Contents
        'codehilite', # Syntax highlighting for code
        'extra',      # Extra markdown features (tables, footnotes, etc.)
        'smarty',     # Smart quotes, dashes
    ],
    'extension_configs': {
        'toc': {'baselevel': 2}, # start headings at <h2>
        'codehilite': {'linenums': True, # for code line number
                       'css_class': 'highlight'}, # css for codeblock
    }
}

STATIC_PATHS = ['extra/js','extra/css',]

PUBLICATIONS_SRC = "content/reference.bib"
BIBLIOGRAPHY_START = '<section id="references"><h2>References</h2>'
BIBLIOGRAPHY_END = '</section>'

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True