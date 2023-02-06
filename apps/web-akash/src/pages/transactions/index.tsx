import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Transactions from '@/screens/transactions';
import nextI18NextConfig from '../../../next-i18next.config';

const TransactionsPage: NextPage = () => <Transactions />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'transactions',
  'message_labels',
  'message_contents'
);

export default TransactionsPage;
