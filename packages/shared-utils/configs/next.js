/* eslint-disable @typescript-eslint/no-var-requires */
const { basename } = require('path');

function getBaseConfig(basePath, chainName) {
  const config = {
    reactStrictMode: true,
    experimental: {
      esmExternals: 'loose',
    },
    poweredByHeader: false,
    basePath,
    webpack: webpackConfig,
    eslint: {
      // to speed up the build task
      ignoreDuringBuilds: true,
    },
    redirects: async () => [
      {
        source: '/account/:path*',
        destination: '/accounts/:path*',
        permanent: true,
      },
      {
        source: '/transaction/:path*',
        destination: '/transactions/:path*',
        permanent: true,
      },
      {
        source: '/validator/:path*',
        destination: '/validators/:path*',
        permanent: true,
      },
    ],
    transpilePackages: ['ui'],
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      NEXT_PUBLIC_RELEASE: `${chainName}-v${process.env.npm_package_version ?? ''}`,
    },
    compiler: {
      emotion: true,
      reactRemoveProperties: process.env.NODE_ENV === 'production',
      removeConsole: process.env.NODE_ENV === 'production',
    },
  };
  return config;
}

/**
 * "This is to allow the use of svg files in the project."
 *
 * The first rule is to allow the use of svg files in the project
 * @param config - This is the webpack configuration object.
 * @returns The config object.
 */
function webpackConfig(config, { defaultLoaders, isServer, webpack }) {
  config.resolve.fallback = { fs: false };
  /* This is to allow the use of svg files in the project. */
  config.module.rules.push({
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  });
  config.module.rules.push({
    test: /\.svg$/i,
    // issuer: /\.[jtmc]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: [
      defaultLoaders.babel,
      {
        loader: '@svgr/webpack',
        options: { babel: false },
      },
    ],
  });
  if (!isServer) {
    // Ensures no server modules are included on the client.
    config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /lib\/server/ }));
  }

  return config;
}

/**
 * @param dir - the directory of the current chain
 * @returns The base config is being returned with the base config.
 */
function getNextConfig(dir) {
  // each chain has its own chains/<chainName>.json
  const [_match, chainName] = /web-(.+)$/.exec(basename(dir)) ?? ['', 'base'];
  const basePath = (process.env.BASE_PATH || `${`/${chainName}`}`).replace(/^(\/|\/base)$/, '');
  const config = getBaseConfig(basePath, chainName);
  config.env.NEXT_PUBLIC_APP_NAME = dir.replace(/-/g, '_');
  return config;
}

module.exports = getNextConfig;
