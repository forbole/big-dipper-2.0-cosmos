import chainConfig from '@/chainConfig';
import * as Sentry from '@sentry/nextjs';

const { chainName } = chainConfig();
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: process.env.NEXT_PUBLIC_RELEASE,
  tracesSampleRate: 1.0,
});
