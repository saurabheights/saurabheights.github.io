import os
import shlex
import shutil
import sys
import datetime
import requests
import zipfile
import subprocess

from pathlib import Path
from invoke import task
from invoke.main import program
from pelican import main as pelican_main
from pelican.server import ComplexHTTPRequestHandler, RootedHTTPServer
from pelican.settings import DEFAULT_CONFIG, get_settings_from_file

OPEN_BROWSER_ON_SERVE = True
SETTINGS_FILE_BASE = "pelicanconf.py"
SETTINGS = {}
SETTINGS.update(DEFAULT_CONFIG)
LOCAL_SETTINGS = get_settings_from_file(SETTINGS_FILE_BASE)
SETTINGS.update(LOCAL_SETTINGS)

CONFIG = {
    "settings_base": SETTINGS_FILE_BASE,
    "settings_publish": "publishconf.py",
    # Output path. Can be absolute or relative to tasks.py. Default: 'output'
    "deploy_path": SETTINGS["OUTPUT_PATH"],
    # Github Pages configuration
    "github_pages_branch": "main",
    "commit_message": f"'Publish site on {datetime.date.today().isoformat()}'",
    # Host and port for `serve`
    "host": "localhost",
    "port": 8000,
}

FLEX_ZIP_URL = "https://github.com/alexandrevicenzi/Flex/archive/refs/heads/master.zip"
THEMES_DIR = Path("themes")
FLEX_DIR = THEMES_DIR / "Flex"
ZIP_FILE = Path("flex.zip")

TOC_ZIP_URL = "https://github.com/ingwinlu/pelican-toc/archive/refs/heads/master.zip"
PLUGINS_DIR = Path("plugins")
TOC_DIR = PLUGINS_DIR / "pelican-toc"
ZIP_FILEP = Path("pelican-toc.zip")

RENDER_MATH_ZIP_URL = (
    "https://github.com/pelican-plugins/render-math/archive/refs/heads/main.zip"
)
RENDER_MATH_DIR = PLUGINS_DIR / "render_math"
ZIP_FILE_RM = Path("render-math.zip")


@task
def clean(c):
    """Remove generated files"""
    if os.path.isdir(CONFIG["deploy_path"]):
        shutil.rmtree(CONFIG["deploy_path"])
        os.makedirs(CONFIG["deploy_path"])


@task
def build(c):
    """Build local version of site"""
    pelican_run("-s {settings_base}".format(**CONFIG))


@task
def rebuild(c):
    """`build` with the delete switch"""
    pelican_run("-d -s {settings_base}".format(**CONFIG))


@task
def regenerate(c):
    """Automatically regenerate site upon file modification"""
    pelican_run("-r -s {settings_base}".format(**CONFIG))


@task
def serve(c):
    """Serve site at http://$HOST:$PORT/ (default is localhost:8000)"""

    class AddressReuseTCPServer(RootedHTTPServer):
        allow_reuse_address = True

    server = AddressReuseTCPServer(
        CONFIG["deploy_path"],
        (CONFIG["host"], CONFIG["port"]),
        ComplexHTTPRequestHandler,
    )

    if OPEN_BROWSER_ON_SERVE:
        # Open site in default browser
        import webbrowser

        webbrowser.open("http://{host}:{port}".format(**CONFIG))

    sys.stderr.write("Serving at {host}:{port} ...\n".format(**CONFIG))
    server.serve_forever()


@task
def reserve(c):
    """`build`, then `serve`"""
    build(c)
    serve(c)


@task
def preview(c):
    """Build production version of site"""
    pelican_run("-s {settings_publish}".format(**CONFIG))


@task
def livereload(c):
    """Automatically reload browser tab upon file modification."""
    from livereload import Server

    def cached_build():
        cmd = "-s {settings_base} -e CACHE_CONTENT=true LOAD_CONTENT_CACHE=true"
        pelican_run(cmd.format(**CONFIG))

    cached_build()
    server = Server()
    theme_path = SETTINGS["THEME"]
    watched_globs = [
        CONFIG["settings_base"],
        f"{theme_path}/templates/**/*.html",
    ]

    content_file_extensions = [".md", ".rst"]
    for extension in content_file_extensions:
        content_glob = "{}/**/*{}".format(SETTINGS["PATH"], extension)
        watched_globs.append(content_glob)

    static_file_extensions = [".css", ".js"]
    for extension in static_file_extensions:
        static_file_glob = f"{theme_path}/static/**/*{extension}"
        watched_globs.append(static_file_glob)

    for glob in watched_globs:
        server.watch(glob, cached_build)

    if OPEN_BROWSER_ON_SERVE:
        # Open site in default browser
        import webbrowser

        webbrowser.open("http://{host}:{port}".format(**CONFIG))

    server.serve(host=CONFIG["host"], port=CONFIG["port"], root=CONFIG["deploy_path"])


@task
def publish(c):
    """Publish to production via rsync"""
    pelican_run("-s {settings_publish}".format(**CONFIG))
    c.run(
        'rsync --delete --exclude ".DS_Store" -pthrvz -c '
        '-e "ssh -p {ssh_port}" '
        "{} {ssh_user}@{ssh_host}:{ssh_path}".format(
            CONFIG["deploy_path"].rstrip("/") + "/", **CONFIG
        )
    )


@task
def gh_pages(c):
    """Publish to GitHub Pages"""
    preview(c)
    c.run(
        "ghp-import -b {github_pages_branch} "
        "-m {commit_message} "
        "{deploy_path} -p".format(**CONFIG)
    )


def pelican_run(cmd):
    cmd += " " + program.core.remainder  # allows to pass-through args to pelican
    pelican_main(shlex.split(cmd))


@task
def download_plugin(c):
    print("⬇️  Downloading pelican-toc...")
    response = requests.get(TOC_ZIP_URL)
    with open(ZIP_FILEP, "wb") as f:
        f.write(response.content)

    # Remove old pelican-toc if it exists
    if TOC_DIR.exists():
        print("🗑 Removing old pelican-toc...")
        shutil.rmtree(TOC_DIR)

    # Extract new
    print("📦 Extracting pelican-toc...")
    with zipfile.ZipFile(ZIP_FILEP, "r") as zip_ref:
        zip_ref.extractall(PLUGINS_DIR)

    # Rename extracted folder (GitHub names it pelican-toc-master)
    extracted_name = PLUGINS_DIR / "pelican-toc-master"
    extracted_name.rename(TOC_DIR)

    # Cleanup
    ZIP_FILEP.unlink()
    print(f"✅ pelican-toc installed at {TOC_DIR}")


def download_render_math(c):
    print("⬇️  Downloading render-math...")
    response = requests.get(RENDER_MATH_ZIP_URL)
    with open(ZIP_FILE_RM, "wb") as f:
        f.write(response.content)

    # Remove old render_math if it exists
    if RENDER_MATH_DIR.exists():
        print("🗑 Removing old render_math...")
        shutil.rmtree(RENDER_MATH_DIR)

    # Extract zip into plugins/
    print("📦 Extracting render-math...")
    with zipfile.ZipFile(ZIP_FILE_RM, "r") as zip_ref:
        zip_ref.extractall(PLUGINS_DIR)

    # Path inside the extracted archive
    extracted_root = (
        PLUGINS_DIR / "render-math-main" / "pelican" / "plugins" / "render_math"
    )

    if extracted_root.exists():
        shutil.move(str(extracted_root), str(RENDER_MATH_DIR))
        print(f"✅ render_math plugin moved to {RENDER_MATH_DIR}")
    else:
        print("⚠️ Could not find extracted render_math directory!")

    # Cleanup leftover "render-math-main" and zip
    shutil.rmtree(PLUGINS_DIR / "render-math-main", ignore_errors=True)
    ZIP_FILE_RM.unlink()


@task
def clean_plugin(c):
    # Remove the pelican-toc plugin
    if TOC_DIR.exists():
        shutil.rmtree(TOC_DIR)
        print("🧹 pelican-toc plugin removed.")
    else:
        print("⚠️ No pelican-toc plugin folder found to delete.")
    # Remove render_math
    if RENDER_MATH_DIR.exists():
        shutil.rmtree(RENDER_MATH_DIR)
        print("🧹 render_math plugin removed.")
    else:
        print("⚠️ No render_math plugin folder found.")


@task
def download_theme(c):  # Download theme in zip
    print("Downloading Flex theme...")
    response = requests.get(FLEX_ZIP_URL)
    with open(ZIP_FILE, "wb") as f:
        f.write(response.content)

    # 2. Remove old Flex theme if exists
    if FLEX_DIR.exists():
        print("🗑 Removing old Flex theme...")
        shutil.rmtree(FLEX_DIR)

    # 3. Unzip Flex into themes/Flex
    print("📦 Extracting Flex theme...")
    with zipfile.ZipFile(ZIP_FILE, "r") as zip_ref:
        zip_ref.extractall(THEMES_DIR)

    # Rename extracted folder (GitHub names it Flex-master)
    extracted_name = THEMES_DIR / "Flex-master"
    extracted_name.rename(FLEX_DIR)

    # Remove ZIP file
    ZIP_FILE.unlink()  # delete zip file
    print(f"✅ Flex theme installed at {FLEX_DIR}")


@task
def replace_css(c):
    source = Path("custom.css")  # file in root folder
    destination = (
        FLEX_DIR / "static" / "stylesheet" / "style.min.css"
    )  # path inside theme
    # Copy the file
    shutil.copy2(source, destination)
    print(f"✅ Replaced {destination} with {source}")

    source_dark = Path("dark-theme.css")  # replace dark theme
    destination_dark = FLEX_DIR / "static" / "stylesheet" / "dark-theme.min.css"
    shutil.copy2(source_dark, destination_dark)
    print(f"✅ Replaced {destination_dark} with {source_dark}")

    templates = ["index.html", "base.html", "article.html"]

    for tmpl in templates:
        source1 = Path("custom_temp") / tmpl
        destination1 = FLEX_DIR / "templates" / tmpl
        shutil.copy2(source1, destination1)
        print(f"✅ Replaced {destination1} with {source1}")

    source2 = Path("custom_temp") / "sidebar.html"
    destination2 = (
        FLEX_DIR / "templates" / "partial" / "sidebar.html"
    )  # path inside theme
    # Copy the file
    shutil.copy2(source2, destination2)
    print(f"✅ Replaced {destination2} with {source2}")


@task
def clean_theme(c):
    """Remove the Flex theme after use"""
    if THEMES_DIR.exists():
        shutil.rmtree(THEMES_DIR)
        print("🧹 Flex theme folder removed.")
    else:
        print("⚠️ No Flex theme folder found to delete.")


@task
def download_themes(c):
    clean_theme(c)
    clean_plugin(c)
    download_theme(c)
    download_plugin(c)
    download_render_math(c)


@task
def build_flex(c):
    replace_css(c)
    build(c)
    subprocess.run(["pelican", "--listen"])
