/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');
const getNextConfig = require('shared-utils/configs/next.js');

const nextConfig = getNextConfig(__dirname);
const nextConfigWithSentry = process.env.NEXT_PUBLIC_SENTRY_DSN
  ? withSentryConfig({ ...nextConfig, sentry: { hideSourceMaps: true } })
  : nextConfig;

module.exports = nextConfigWithSentry;
