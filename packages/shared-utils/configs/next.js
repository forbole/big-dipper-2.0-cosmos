/* eslint-disable @typescript-eslint/no-var-requires */
const { basename, resolve } = require('path');

/**
 * It takes the chainConfigJson and returns a baseConfig object
 * @param basePath - This is the basePath.
 * @returns The base config object.
 */
function getBaseConfig(basePath, chainName) {
  const config = {
    reactStrictMode: true,
    experimental: {
      ...(process.env.BUILD_STANDALONE
        ? {
            // this includes files from the monorepo base two directories up
            outputFileTracingRoot: resolve(__dirname, '../../'),
          }
        : {}),
      fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
      esmExternals: 'loose',
    },
    ...(process.env.BUILD_STANDALONE
      ? {
          output: 'standalone',
        }
      : {}),
    poweredByHeader: false,
    basePath,
    webpack: webpackConfig,
    eslint: {
      // to speed up the build task
      ignoreDuringBuilds: true,
    },
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
 * @param extraConfig - The extra configuration object.
 * @returns The base config is being returned with the base config.
 */
function getNextConfig(dir, extraConfig) {
  // each chain has its own chains/<chainName>.json
  const [_match, chainName] = /web-(.+)$/.exec(basename(dir)) ?? ['', 'base'];
  const basePath = (process.env.BASE_PATH || `${`/${chainName}`}`).replace(/^(\/|\/base)$/, '');
  return { ...getBaseConfig(basePath, chainName), ...extraConfig };
}

module.exports = getNextConfig;
