import chainConfig from '@/chainConfig';
import * as Sentry from '@sentry/nextjs';

const { chainName } = chainConfig();
Sentry.init({
  release: process.env.NEXT_PUBLIC_RELEASE,
  tracesSampleRate: 1.0,
});
