import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: process.env.NEXT_PUBLIC_SENTRY_DSN ? process.env.NEXT_PUBLIC_RELEASE : '',
  tracesSampleRate: process.env.NEXT_PUBLIC_SENTRY_DSN ? 1.0 : 0,
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
});
