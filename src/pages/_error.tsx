/* eslint-disable */
import { NextPageContext } from 'next';
import Error from '@screens/error';

const ErrorPage = () => {
  return (
    <Error />
  );
};

ErrorPage.getInitialProps = ({
  res, err,
}: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
