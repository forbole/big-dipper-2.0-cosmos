import * as Sentry from '@sentry/nextjs';
import chainConfig from '@/chainConfig';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: `${chainConfig().chainName}@${process.env.npm_package_version}`,
  tracesSampleRate: 1.0,
});
