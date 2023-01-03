/* eslint-disable @typescript-eslint/no-var-requires */
const getNextConfig = require('shared-utils/configs/next');

let nextConfig = getNextConfig(__dirname);

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  // eslint-disable-next-line global-require
  const { withSentryConfig } = require('@sentry/nextjs');
  nextConfig.sentry = { hideSourceMaps: false };
  nextConfig = withSentryConfig(nextConfig);
}

const finalConfig = nextConfig;

module.exports = finalConfig;
