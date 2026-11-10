// A sitemap needs full URLs, so it is only built once site.url is set.
module.exports = class {
  data() {
    return {
      layout: false,
      eleventyExcludeFromCollections: true,
      permalink: (data) => (data.site.url ? "/sitemap.xml" : false),
    };
  }

  render(data) {
    const urls = data.collections.all
      .filter((item) => item.url && !item.data.noindex)
      .map((item) => `  <url><loc>${data.site.url}${item.url}</loc></url>`)
      .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  }
};
