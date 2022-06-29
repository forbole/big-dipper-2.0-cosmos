// import { generalConfig } from '@configs';

const nextTranslate = require('next-translate');

// console.log(generalConfig.basePath);

module.exports = nextTranslate({
  poweredByHeader: false,
  basePath: '/sifchain',
  // basePath: `/${generalConfig.basePath}`,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
