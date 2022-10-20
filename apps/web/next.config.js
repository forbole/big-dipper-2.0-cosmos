// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const { withSentryConfig } = require('@sentry/nextjs');
const nextTranslate = require('next-translate');

const basePath = process.env.CHAIN_NAME || 'desmos';

const moduleExports = nextTranslate({
  swcMinify: true,
  distDir: `.next/${basePath}`,
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: `/${basePath}`,
  env: {
    CHAIN_TYPE: process.env.CHAIN_TYPE,
    CHAIN_NAME: process.env.CHAIN_NAME,
  },
  typescript: {
    // TODO: Remove this once all the typescript errors are fixed
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  moduleExports.sentry = {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  };

  const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
  };

  module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
} else {
  module.exports = moduleExports;
}
