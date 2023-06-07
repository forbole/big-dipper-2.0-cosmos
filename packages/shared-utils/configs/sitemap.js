/* eslint-disable @typescript-eslint/no-var-requires */
const getNextConfig = require('shared-utils/configs/next');

function getSitemap(dir) {
  const nextConfig = getNextConfig(dir);
  const { basePath } = nextConfig;
  const siteUrl = process.env.SITE_URL || `https://bigdipper.live${basePath}`;

  return {
    siteUrl,
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
    },
  };
}

module.exports = getSitemap;
