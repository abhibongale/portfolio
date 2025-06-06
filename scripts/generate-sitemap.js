const sitemap = require('next-sitemap');

(async () => {
  await sitemap({
    // Custom options like base URL, pages, etc.
    siteUrl: 'https://your-site-url.com',
    pages: [
      '/', '/blog', '/project' // Add your dynamic pages here
    ],
    // Additional configuration as per next-sitemap docs
  });
})();
