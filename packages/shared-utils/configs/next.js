/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate');
const withTM = require('next-transpile-modules');
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
    },
    swcMinify: true,
    ...(process.env.BUILD_STANDALONE
      ? {
          output: 'standalone',
        }
      : {}),
    poweredByHeader: false,
    basePath,
    webpack,
    eslint: {
      // to speed up the build task
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      NEXT_PUBLIC_RELEASE: `${chainName}-v${process.env.npm_package_version ?? ''}`,
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
function webpack(config, options) {
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
      options.defaultLoaders.babel,
      {
        loader: '@svgr/webpack',
        options: { babel: false },
      },
    ],
  });
  return config;
}

/**
 * @param dir - the directory of the current file
 * @returns A function that takes a directory name as an argument and returns a configuration object.
 */
function getNextConfig(dir) {
  // each chain has its own chains/<chainName>.json
  const [_match, chainName] = /web-(.+)$/.exec(basename(dir)) ?? ['', 'base'];
  const basePath = (process.env.BASE_PATH || `${`/${chainName}`}`).replace(/^(\/|\/base)$/, '');
  return withTM(['ui'])(nextTranslate(getBaseConfig(basePath, chainName)));
}

module.exports = getNextConfig;
