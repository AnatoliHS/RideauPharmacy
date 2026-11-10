const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const sectionizePlugin = require("./_plugins/eleventy-plugin-sectionize");

module.exports = function(eleventyConfig) {
  // Publish only what the site uses. src/assets also holds raw originals
  // (phone photos and videos) that must stay out of the public build.
  eleventyConfig.addPassthroughCopy({
    "./assets/web": "/web",
    "./assets/script.js": "/script.js",
    "./assets/site.webmanifest": "/site.webmanifest",
    "./assets/favicon.ico": "/favicon.ico",
    "./assets/favicon-16x16.png": "/favicon-16x16.png",
    "./assets/favicon-32x32.png": "/favicon-32x32.png",
    "./assets/apple-touch-icon.png": "/apple-touch-icon.png",
    "./assets/android-chrome-192x192.png": "/android-chrome-192x192.png",
    "./assets/android-chrome-512x512.png": "/android-chrome-512x512.png",
  });


  eleventyConfig.addPlugin(sectionizePlugin);

  eleventyConfig.addTemplateFormats("md");
  
  eleventyConfig.addLayoutAlias("default", "default.njk");

  eleventyConfig.addGlobalData("layout", "default");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
  };
};
