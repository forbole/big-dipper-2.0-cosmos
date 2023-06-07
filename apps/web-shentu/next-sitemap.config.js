/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const getSitemap = require('shared-utils/configs/sitemap');

module.exports = getSitemap(JSON.parse(readFileSync('./package.json', 'utf8')).name);
