const generalConfig = require('../configs/general.json');

function nextConfig(chainConfigJson) {
  const basePath = `/${chainConfigJson.chainName}`;
  const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE;
  const { chains, ...settings } = chainConfigJson;
  let chain = chains.find(c => c.id === chainType);
  if (!chain) [chain] = chains;
  if (!chain) throw new Error(`Config not found for CHAIN_NAME ${chainConfigJson.chainName}`);
  const chainConfig = {
    ...settings,
    ...chain,
  };
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
    env: {
      NEXT_PUBLIC_GENERAL_CONFIG: process.env.NEXT_PUBLIC_GENERAL_CONFIG ?? JSON.stringify(generalConfig),
      NEXT_PUBLIC_CHAIN_CONFIG: process.env.NEXT_PUBLIC_CHAIN_CONFIG ?? JSON.stringify(chainConfig),
      NEXT_PUBLIC_CHAIN_NAME: process.env.NEXT_PUBLIC_CHAIN_NAME ?? chainConfig.chainName,
      NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? chainConfig.endpoints.graphql,
      NEXT_PUBLIC_GRAPHQL_WS: process.env.NEXT_PUBLIC_GRAPHQL_WS ?? chainConfig.endpoints.graphqlWebsocket,
      NEXT_PUBLIC_MATOMO_URL: process.env.NEXT_PUBLIC_MATOMO_URL ?? chainConfig.marketing.matomoURL,
      NEXT_PUBLIC_MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? chainConfig.marketing.matomoSiteID,
      NEXT_PUBLIC_RPC_WEBSOCKET: process.env.NEXT_PUBLIC_RPC_WEBSOCKET ?? chainConfig.endpoints.publicRpcWebsocket,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      });
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
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
  for (let keys = Object.keys(config.env), i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    process.env[key] = config.env[key];
  }
  return config;
}

module.exports = nextConfig;
