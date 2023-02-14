import type { NextPage } from 'next';
import ErrorPage, { getInitialProps } from 'ui/pages/_error';

const MyError: NextPage = () => <ErrorPage />;

MyError.getInitialProps = getInitialProps;

export default MyError;
