import { readFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
const curdir =
  typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));
const generalConfig = JSON.parse(readFileSync(resolve(join(curdir, 'general.json'))));

function nextConfig(chainConfigJson) {
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
  const basePath = process.env.BASE_PATH ?? `/${chainConfig.chainName}`.replace(/^\/$/, '');

  const config = {
    swcMinify: true,
    output: 'standalone',
    reactStrictMode: true,
    poweredByHeader: false,
    basePath,
    typescript: {
      // TODO: Remove this once all the typescript errors are fixed
      ignoreBuildErrors: true,
    },
    /* Setting the environment variables for the app. */
    env: {
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
    },
    compiler: {
      styledComponents: true,
    },
    webpack(config) {
      /* This is to allow the use of svg files in the project. */
      config.module.rules.push({
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      });
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
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
    },
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

export default nextConfig;
