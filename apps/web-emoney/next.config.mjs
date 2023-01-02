/* eslint-disable @typescript-eslint/no-var-requires */
import { withSentryConfig } from '@sentry/nextjs';
import getNextConfig from 'shared-utils/configs/next.mjs';
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(new URL('.', import.meta.url));

const nextConfig = process.env.NEXT_PUBLIC_SENTRY_DSN
  ? {
      ...getNextConfig(dirname),
      sentry: {
        disableServerWebpackPlugin: !process.env.NEXT_PUBLIC_SENTRY_DSN,
        disableClientWebpackPlugin: !process.env.NEXT_PUBLIC_SENTRY_DSN,
      },
    }
  : withSentryConfig({ ...getNextConfig(dirname), sentry: { hideSourceMaps: true } }, {});

export default nextConfig;
