/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require('fs');
const getNextConfig = require('shared-utils/configs/next');

let nextConfig = getNextConfig(JSON.parse(readFileSync('./package.json', 'utf8')).name);
if (process.env.NODE_ENV === 'development') {
  delete nextConfig.i18n;
}

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  // eslint-disable-next-line global-require
  const { withSentryConfig } = require('@sentry/nextjs');
  nextConfig.sentry = { hideSourceMaps: false };
  nextConfig = withSentryConfig(nextConfig);
}

const finalConfig = nextConfig;

module.exports = finalConfig;
