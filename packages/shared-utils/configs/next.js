/* eslint-disable @typescript-eslint/no-var-requires */
const { basename, resolve } = require('path');
const nextTranslate = require('next-translate');
const withTM = require('next-transpile-modules');

/**
 * It takes the chainConfigJson and returns a baseConfig object
 * @param basePath - This is the basePath.
 * @returns The base config object.
 */
function getBaseConfig(basePath) {
  const config = {
    output: 'standalone',
    swcMinify: true,
    reactStrictMode: true,
    poweredByHeader: false,
    basePath,
    compiler: {
      styledComponents: true,
    },
    webpack,
    eslint: {
      // to speed up the build task
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      // this includes files from the monorepo base two directories up
      outputFileTracingRoot: resolve(__dirname, '../../'),
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
function webpack(config) {
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
      'next-swc-loader',
      {
        loader: '@svgr/webpack',
        options: { babel: false },
      },
    ],
  });
  return config;
}

/**
 * @param dirname - the directory of the current file
 * @returns A function that takes a directory name as an argument and returns a configuration object.
 */
function getNextConfig(dirname) {
  // each chain has its own chains/<chainName>.json
  const [_match, chainName] = /web-(.+)$/.exec(basename(dirname)) ?? ['', 'base'];
  const basePath = (process.env.BASE_PATH || `${`/${chainName}`}`).replace(/^(\/|\/base)$/, '');
  return withTM(['ui'])(nextTranslate(getBaseConfig(basePath)));
}

module.exports = getNextConfig;
