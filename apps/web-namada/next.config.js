/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const { i18n } = require('./next-i18next.config');
const getNextConfig = require('../../packages/shared-utils/configs/next');

const nextConfig = getNextConfig(JSON.parse(readFileSync('./package.json', 'utf8')).name);
nextConfig.i18n = i18n;

nextConfig.rewrites = async () => [
  {
    source: '/gql',
    destination: 'http://154.91.1.75:8080/v1/graphql',
  },
];

module.exports = nextConfig;
