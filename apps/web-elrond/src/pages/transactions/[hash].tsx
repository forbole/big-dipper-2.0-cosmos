import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import TransactionDetails from '@/screens/transaction_details';

const TransactionDetailsPage: NextPage = () => <TransactionDetails />;

export const getServerSideProps = withGetServerSideProps('transactions', 'blocks');

export default TransactionDetailsPage;
