/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const getNextConfig = require('../../packages/shared-utils/configs/next');

const nextConfig = getNextConfig(JSON.parse(readFileSync('./package.json', 'utf8')).name);

module.exports = nextConfig;
