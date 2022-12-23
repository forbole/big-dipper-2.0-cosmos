import chainConfig from '@/chainConfig';
import * as Sentry from '@sentry/nextjs';

const { chainName } = chainConfig();
Sentry.init({
  release: `${chainName}@${process.env.npm_package_version}`,
  tracesSampleRate: 1.0,
});
