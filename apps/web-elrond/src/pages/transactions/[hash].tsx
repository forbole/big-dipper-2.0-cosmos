import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import TransactionDetails from '@/screens/transaction_details';
import nextI18NextConfig from '../../../next-i18next.config';

const TransactionDetailsPage: NextPage = () => <TransactionDetails />;

export const getServerSideProps = withGetServerSideProps(
  nextI18NextConfig,
  'transactions',
  'blocks'
);

export default TransactionDetailsPage;
