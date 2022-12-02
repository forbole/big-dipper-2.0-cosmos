/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');
const getNextConfig = require('shared-utils/configs/next.js');

let nextConfig = getNextConfig(__dirname);
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  nextConfig = withSentryConfig({ ...nextConfig, sentry: { hideSourceMaps: true } });
}

module.exports = nextConfig;
