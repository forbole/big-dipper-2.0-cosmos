/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');
const getNextConfig = require('../next');

const nextConfig = (dir, base) => {
  const baseConfig = {
    ...getNextConfig(dir, base),
    sentry: { hideSourceMaps: false },
  };
  return withSentryConfig(baseConfig, {});
};

module.exports = nextConfig;
