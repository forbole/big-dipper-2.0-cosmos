import * as Sentry from '@sentry/nextjs';
import type { NextPage, NextPageContext } from 'next';
import Error from '@/screens/error';

const ErrorPage: NextPage = () => <Error />;

export const getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData);
  const { res, err } = contextData;
  return res?.statusCode ?? err?.statusCode ?? 404;
};

export default ErrorPage;
