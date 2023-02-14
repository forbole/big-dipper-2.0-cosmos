import withGetStaticProps from '@/pages/withGetStaticProps';
import Transactions from '@/screens/transactions';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const TransactionsPage: NextPage = () => <Transactions />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'transactions',
  'message_labels',
  'message_contents'
);

export default TransactionsPage;
