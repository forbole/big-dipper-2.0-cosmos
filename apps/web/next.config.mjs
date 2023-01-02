/* eslint-disable @typescript-eslint/no-var-requires */
import { withSentryConfig } from '@sentry/nextjs';
import { dirname } from 'path';
import getNextConfig from 'shared-utils/configs/next.mjs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let nextConfig = getNextConfig(__dirname);
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  nextConfig = withSentryConfig({ ...nextConfig, sentry: { hideSourceMaps: true } }, {});
}

export default nextConfig;
