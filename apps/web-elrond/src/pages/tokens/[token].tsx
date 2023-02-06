import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import TokenDetails from '@/screens/token_details';
import nextI18NextConfig from '../../../next-i18next.config';

const TokenDetailsPage: NextPage = () => <TokenDetails />;

export const getServerSideProps = withGetServerSideProps(
  nextI18NextConfig,
  'tokens',
  'transactions'
);

export default TokenDetailsPage;
