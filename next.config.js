import { chainConfig } from './src/configs/index';

const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  poweredByHeader: false,
  basePath: chainConfig.general.basePath,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

module.exports.env = {
  CHAIN_TYPE: process.env.CHAIN_TYPE,
  CHAIN_NAME: process.env.CHAIN_NAME,
};
