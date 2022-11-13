const { readFileSync } = require('fs');
const { basename, join, resolve } = require('path');
const nextTranslate = require('next-translate');
const withTM = require('next-transpile-modules');
const withSentry = require('shared-utils/configs/withSentry.js');
const generalConfig = loadJson(join(__dirname, 'general.json'));

/**
 * It loads the chain config file, then passes it to `getBaseConfig` to get the base config, then
 * passes that to `nextTranslate` to translate the config to Next.js, then passes that to `withSentry`
 * to add Sentry, then passes that to `withTM` to add TM, then returns the result
 * @param dirname - the directory of the current file
 * @returns A function that takes a directory name as an argument and returns a configuration object.
 */
function getNextConfig(dirname) {
  // each chain has its own chains/<chainName>.json
  const [_match, configFile] = /web-(.+)$/.exec(basename(dirname)) ?? ['', 'base'];
  const chainConfigJson = loadJson(`../../packages/shared-utils/configs/chains/${configFile}.json`);
  return withTM(['ui'])(withSentry(nextTranslate(getBaseConfig(chainConfigJson))));
}

/**
 * It takes a JSON object and returns a JSON object
 * @param chainConfigJson - The JSON object that contains the chain configuration.
 * @returns The chainConfig object.
 */
function getChainConfig(chainConfigJson) {
  /* Setting the basePath, chainType, chains, and settings variables. */
  const chainType = (process.env.NEXT_PUBLIC_CHAIN_TYPE ?? 'mainnet').toLowerCase();
  const { chains, ...settings } = chainConfigJson;
  let chain = chains.find((c) => c.chainType?.toLowerCase() === chainType);
  if (!chain && chainType !== 'testnet') {
    chain = chains.find((c) => c.chainType?.toLowerCase() === 'testnet');
  }

  /* If the chainType is not found, it will use the first chain in the array. */
  if (!chain) [chain] = chains;
  if (!chain) throw new Error(`Config not found for CHAIN_NAME ${chainConfigJson.chainName}`);

  /* Merging the settings and chain objects. */
  const chainConfig = {
    ...settings,
    ...chain,
  };
  return chainConfig;
}

/**
 * It takes the chainConfigJson and returns a baseConfig object
 * @param chainConfigJson - This is the chain config json file.
 * @returns The base config object.
 */
function getBaseConfig(chainConfigJson) {
  /* Merging the settings and chain objects. */
  const chainConfig = getChainConfig(chainConfigJson);
  const basePath = process.env.BASE_PATH ?? `/${chainConfig.chainName}`.replace(/^\/$/, '');

  const config = {
    swcMinify: true,
    output: 'standalone',
    reactStrictMode: true,
    poweredByHeader: false,
    basePath,
    /* Setting the environment variables for the app. */
    env: env(generalConfig, chainConfig),
    compiler: {
      styledComponents: true,
    },
    webpack,
    async redirects() {
      /* This is to redirect the user to the default page if they accessed english version. */
      const result = [
        {
          source: '/en/:slug',
          destination: `/:slug`,
          basePath: false,
          permanent: false,
          locale: false,
        },
      ];
      /* This is to redirect the user to the baasePath if they are trying to access the root. */
      if (basePath !== '/') {
        result.push({
          source: '/',
          destination: basePath,
          basePath: false,
          permanent: false,
        });
      }
      return result;
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
 * It takes two objects, `generalConfig` and `chainConfig`, and returns an object with the same keys as
 * the two input objects, but with the values of the keys being the values of the corresponding keys in
 * the input objects, or the values of the corresponding environment variables if they exist
 * @param generalConfig - This is the general configuration for the app. It's used to configure the
 * app's title, logo, and other general settings.
 * @param chainConfig - This is the chain configuration object. It contains the endpoints for the
 * GraphQL server, the GraphQL websocket, and the public RPC websocket.
 * @returns An object with the following properties:
 * - GENERAL_CONFIG:
 *   - If the environment variable GENERAL_CONFIG is set, it will be used.
 *   - Otherwise, the generalConfig object will be stringified and used.
 * - CHAIN_CONFIG:
 *   - If the environment
 */
function env(generalConfig, chainConfig) {
  return {
    GENERAL_CONFIG:
      process.env.GENERAL_CONFIG || JSON.stringify(generalConfig),
    CHAIN_CONFIG: process.env.CHAIN_CONFIG || JSON.stringify(chainConfig),
  };
}

/**
 * It reads a file and parses it as JSON
 * @param path - The path to the JSON file.
 * @returns The JSON.parse() method parses a JSON string, constructing the JavaScript value or object
 * described by the string.
 */
function loadJson(path) {
  return JSON.parse(readFileSync(resolve(path)));
}

module.exports = getNextConfig;
