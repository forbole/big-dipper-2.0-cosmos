const nextTranslate = require('next-translate');
const { basePath } = require('./src/configs/general_config.json');

module.exports = nextTranslate({
  poweredByHeader: false,
  basePath,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
