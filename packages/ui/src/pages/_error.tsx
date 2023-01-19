import type { NextPage, NextPageContext } from 'next';
import captureUnderscoreErrorException from 'shared-utils/configs/captureUnderscoreErrorException';
import Error from '@/screens/error';

const ErrorPage: NextPage = () => <Error />;

export const getInitialProps = async (contextData: NextPageContext) => {
  await captureUnderscoreErrorException(contextData);
  const { res, err } = contextData;
  return res?.statusCode ?? err?.statusCode ?? 404;
};

export default ErrorPage;
