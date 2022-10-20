const nextTranslate = require('next-translate');
const { basePath } = require('./src/configs/general_config.json');

module.exports = nextTranslate({
  poweredByHeader: false,
  basePath,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
