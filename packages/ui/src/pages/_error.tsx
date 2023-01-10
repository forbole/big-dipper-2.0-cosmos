import type { NextPage, NextPageContext } from 'next';
import Error from '@/screens/error';

const ErrorPage: NextPage = () => <Error />;

export const getInitialProps = async (contextData: NextPageContext) => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const Sentry = await import('@sentry/nextjs');
    await Sentry.captureUnderscoreErrorException(contextData);
  }
  const { res, err } = contextData;
  return res?.statusCode ?? err?.statusCode ?? 404;
};

export default ErrorPage;
