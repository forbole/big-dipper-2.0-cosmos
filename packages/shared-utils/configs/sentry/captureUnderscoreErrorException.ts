import * as Sentry from '@sentry/nextjs';
import type { NextPageContext } from 'next';

async function captureUnderscoreErrorException(contextData: NextPageContext) {
  await Sentry.captureUnderscoreErrorException(contextData);
}

export default captureUnderscoreErrorException;
