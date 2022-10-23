function nextConfig(basePath) {
  return {
    swcMinify: true,
    output: 'standalone',
    reactStrictMode: true,
    poweredByHeader: false,
    basePath,
    typescript: {
      // TODO: Remove this once all the typescript errors are fixed
      ignoreBuildErrors: true,
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
}

module.exports = nextConfig;
