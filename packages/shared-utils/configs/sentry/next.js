/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');
const getNextConfig = require('../next');

const nextConfig = (dir) =>
  withSentryConfig(getNextConfig(dir), { sentry: { hideSourceMaps: false } });

module.exports = nextConfig;
