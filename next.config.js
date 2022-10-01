const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  poweredByHeader: false,
  basePath: `/${process.env.CHAIN_NAME}`.toLowerCase(),
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
