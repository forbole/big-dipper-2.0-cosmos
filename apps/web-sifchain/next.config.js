const nextTranslate = require('next-translate');
// for turborepo
const withTM = require('next-transpile-modules')(['ui']);
const withSentry = require('shared-utils/withSentry');
const { chainName } = require('./src/configs/general_config.json');

const nextConfig = {
  swcMinify: true,
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: `/${chainName}`,
  typescript: {
    // TODO: Remove this once all the typescript errors are fixed
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    const result = [
      {
        source: '/en/:slug',
        destination: `/:slug`,
        basePath: false,
        permanent: false,
        locale: false,
      },
    ];
    if (chainName) {
      result.push({
        source: '/',
        destination: `/${chainName}`,
        basePath: false,
        permanent: false,
      });
    }
    return result;
  },
};

module.exports = withSentry(withTM(nextTranslate(nextConfig)));
