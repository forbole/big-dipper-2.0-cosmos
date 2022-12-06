import * as Sentry from '@sentry/nextjs';
import chainConfig from '@/chainConfig';

Sentry.init({
  release: `${chainConfig().chainName}-${chainConfig().chainType}@${
    process.env.npm_package_version
  }`,
  tracesSampleRate: 1.0,
});
