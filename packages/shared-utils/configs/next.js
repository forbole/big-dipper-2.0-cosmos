const { readFileSync } = require('fs');
const { basename, join, resolve } = require('path');
const nextTranslate = require('next-translate');
const withTM = require('next-transpile-modules');
const withSentry = require('shared-utils/configs/withSentry.js');
const generalConfig = loadJson(join(__dirname, 'general.json'));

function loadJson(path) {
  return JSON.parse(readFileSync(resolve(path)));
}

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

function env(generalConfig, chainConfig) {
  return {
    NEXT_PUBLIC_GENERAL_CONFIG:
      process.env.NEXT_PUBLIC_GENERAL_CONFIG || JSON.stringify(generalConfig),
    NEXT_PUBLIC_CHAIN_CONFIG: process.env.NEXT_PUBLIC_CHAIN_CONFIG || JSON.stringify(chainConfig),
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL || chainConfig.endpoints.graphql,
    NEXT_PUBLIC_GRAPHQL_WS:
      process.env.NEXT_PUBLIC_GRAPHQL_WS || chainConfig.endpoints.graphqlWebsocket,
    NEXT_PUBLIC_MATOMO_URL: process.env.NEXT_PUBLIC_MATOMO_URL || chainConfig.marketing.matomoURL,
    NEXT_PUBLIC_MATOMO_SITE_ID:
      process.env.NEXT_PUBLIC_MATOMO_SITE_ID || chainConfig.marketing.matomoSiteID,
    NEXT_PUBLIC_RPC_WEBSOCKET:
      process.env.NEXT_PUBLIC_RPC_WEBSOCKET ||
      chainConfig.endpoints.publicRpcWebsocket ||
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
      chainConfig.endpoints.graphql,
  };
}

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

function getNextConfig(dirname) {
  // each chain has its own chains/<chainName>.json
  const configFile = (/web-(.+)$/.exec(basename(dirname)) ?? ['', 'base'])[1];
  const chainConfigJson = loadJson(`../../packages/shared-utils/configs/chains/${configFile}.json`);
  return withTM(['ui'])(withSentry(nextTranslate(getBaseConfig(chainConfigJson))));
}

module.exports = getNextConfig;
