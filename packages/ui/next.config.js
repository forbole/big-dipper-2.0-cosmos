/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const { i18n } = require('./next-i18next.config');
const getNextConfig = require('../shared-utils/configs/next');

const nextConfig = getNextConfig(JSON.parse(readFileSync('./package.json', 'utf8')).name);

module.exports = { ...nextConfig, i18n };
