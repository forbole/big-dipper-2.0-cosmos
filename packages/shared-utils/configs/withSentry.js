// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const { withSentryConfig } = require('@sentry/nextjs');

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

function withSentry(nextConfig) {
  if (!SENTRY_DSN) {
    return nextConfig;
  }

  const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore
    url: 'https://sentry.io/',
    org: 'forbole',
    project: 'big-dipper',
    silent: true,
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
  };

  return withSentryConfig(
    {
      ...nextConfig,
      sentry: {
        // disableServerWebpackPlugin?: boolean;
        // disableClientWebpackPlugin?: boolean;
        // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
        // for client-side builds. (This will be the default starting in
        // `@sentry/nextjs` version 8.0.0.) See
        // https://webpack.js.org/configuration/devtool/ and
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
        // for more information.
        hideSourceMaps: true,
        // transpileClientSDK?: boolean;
        // widenClientFileUpload?: boolean;
        // autoInstrumentServerFunctions?: boolean;
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
      },
    },
    sentryWebpackPluginOptions
  );
}

module.exports = withSentry;
