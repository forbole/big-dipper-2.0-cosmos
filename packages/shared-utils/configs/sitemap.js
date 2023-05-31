/* eslint-disable @typescript-eslint/no-var-requires */
const getNextConfig = require('shared-utils/configs/next');

function getSitemap(dir) {
  const nextConfig = getNextConfig(dir);
  const { basePath } = nextConfig;

  return {
    siteUrl: process.env.SITE_URL || `https://bigdipper.live${basePath}`,
    generateRobotsTxt: true,
  };
}

module.exports = getSitemap;
