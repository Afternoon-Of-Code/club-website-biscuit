import postcss from "eleventy-plugin-postcss";

export default function (eleventyConfig) {
  // Add PostCSS plugin
  eleventyConfig.addPlugin(postcss);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/css/");

  // Add current year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
