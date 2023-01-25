import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import TransactionDetails from '@/screens/transaction_details';

const TransactionDetailsPage: NextPage = () => <TransactionDetails />;

export const getServerSideProps = withGetServerSideProps(
  'transactions',
  'message_labels',
  'message_contents'
);

export default TransactionDetailsPage;
