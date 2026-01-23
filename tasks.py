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
from typing import TypedDict

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


class PluginInfo(TypedDict):
    download_url: str
    plugin_dir: str
    plugin_filename: str
    zip_file: str


PLUGINS_DIR = Path("plugins")

PLUGINS: dict[str, PluginInfo] = {
    "pelican_toc": {
        "download_url": "https://github.com/ingwinlu/pelican-toc/archive/refs/heads/master.zip",
        "plugin_dir": PLUGINS_DIR / "pelican-toc",
        "plugin_filename": "pelican-toc-master",
        "zip_file": Path("pelican-toc.zip"),
    },
    "render_math": {
        "download_url": "https://github.com/pelican-plugins/render-math/archive/refs/heads/main.zip",
        "plugin_dir": PLUGINS_DIR / "render_math",
        "plugin_filename": "render-math-main/pelican/plugins/render_math",
        "zip_file": Path("render-math.zip"),
    },
    "pelican_cite": {
        "download_url": "https://github.com/VorpalBlade/pelican-cite/archive/refs/heads/master.zip",
        "plugin_dir": PLUGINS_DIR / "pelican-cite",
        "plugin_filename": "pelican-cite-master",
        "zip_file": Path("pelican-cite.zip"),
    },
}

FLEX_ZIP_URL = "https://github.com/alexandrevicenzi/Flex/archive/refs/heads/master.zip"
THEMES_DIR = Path("themes")
FLEX_DIR = THEMES_DIR / "Flex"
ZIP_FILE = Path("flex.zip")


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

    content_file_extensions = [".md", ".rst", ".css", ".js"]
    for extension in content_file_extensions:
        content_glob = "{}/**/*{}".format(SETTINGS["PATH"], extension)
        watched_globs.append(content_glob)

    static_file_extensions = [".css", ".js"]
    for extension in static_file_extensions:
        static_file_glob = f"{theme_path}/static/**/*{extension}"
        watched_globs.append(static_file_glob)

    print(f"Watching livereload on: {watched_globs}")

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
        "{} {ssh_user}@{ssh_host}:{ssh_path}".format(CONFIG["deploy_path"].rstrip("/") + "/", **CONFIG)
    )


@task
def gh_pages(c):
    """Publish to GitHub Pages"""
    preview(c)
    c.run("ghp-import -b {github_pages_branch} -m {commit_message} {deploy_path} -p".format(**CONFIG))


def pelican_run(cmd):
    cmd += " " + program.core.remainder  # allows to pass-through args to pelican
    pelican_main(shlex.split(cmd))


@task
def download_plugins(c):
    """Download and extract all plugins defined in PLUGINS"""
    for name, plugin in PLUGINS.items():
        print(f"⬇️  Downloading {name}...")
        response = requests.get(plugin["download_url"])
        with open(plugin["zip_file"], "wb") as f:
            f.write(response.content)

        # Remove old plugin directory if it exists
        if plugin["plugin_dir"].exists():
            print(f"🗑 Removing old {name}...")
            shutil.rmtree(plugin["plugin_dir"])

        # Extract the new plugin
        print(f"📦 Extracting {name}...")
        with zipfile.ZipFile(plugin["zip_file"], "r") as zip_ref:
            zip_ref.extractall(PLUGINS_DIR)

        # Rename extracted folder (GitHub names it usually like "pluginname-master")
        extracted_path = PLUGINS_DIR / plugin["plugin_filename"]
        if extracted_path.exists():
            extracted_path.rename(plugin["plugin_dir"])

        # Cleanup leftover extracted root (like render-math-main or pelican-toc-master)
        for folder in PLUGINS_DIR.iterdir():
            if folder.is_dir() and (folder.name.endswith("-main") or folder.name.endswith("-master")):
                if folder != plugin["plugin_dir"]:
                    shutil.rmtree(folder, ignore_errors=True)

        # Cleanup zip file
        plugin["zip_file"].unlink(missing_ok=True)
        print(f"✅ {name} installed at {plugin['plugin_dir']}")


@task
def clean_plugins(c):
    """Remove all plugin directories defined in PLUGINS."""
    for name, plugin in PLUGINS.items():
        plugin_dir = plugin["plugin_dir"]

        if plugin_dir.exists():
            print(f"🗑 Removing {name}...")
            shutil.rmtree(plugin_dir)
        else:
            print(f"⚠️ {name} not found, skipping...")

    print("✅ All plugins cleaned.")


@task
def download_theme(c):  # Download theme in zip
    print("Downloading Flex theme...")
    response = requests.get(FLEX_ZIP_URL)
    with open(ZIP_FILE, "wb") as f:
        f.write(response.content)

    # 2. Remove old Flex theme if exists
    clean_theme(c)

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
def clean_theme(c):
    """Remove the Flex theme after use"""
    if THEMES_DIR.exists():
        shutil.rmtree(THEMES_DIR)
        print("🧹 Flex theme folder removed.")
    else:
        print("⚠️ No Flex theme folder found to delete.")


@task
def replace_css(c):
    source = Path("custom.css")  # file in root folder
    destination = FLEX_DIR / "static" / "stylesheet" / "style.min.css"  # path inside theme
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
    destination2 = FLEX_DIR / "templates" / "partial" / "sidebar.html"  # path inside theme
    # Copy the file
    shutil.copy2(source2, destination2)
    print(f"✅ Replaced {destination2} with {source2}")


@task
def download_build_artifacts(c):
    clean_theme(c)
    clean_plugins(c)
    download_theme(c)
    download_plugins(c)
    replace_css(c)


@task
def build_flex(c):
    replace_css(c)
    build(c)
    subprocess.run(["pelican", "--listen"])
