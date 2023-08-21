module.exports = function(eleventyConfig) {
    // Copy `css/` to `docs/css/`
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("css");

    return {
      // We can now use .html, .md and data files instead of having to use .njk files.
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "docs"
      }
    }
  };