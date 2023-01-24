import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import TransactionDetails from '@/screens/transaction_details';

const TransactionDetailsPage: NextPage = () => <TransactionDetails />;

export const getStaticProps = withGetStaticProps('transactions', 'blocks');

export default TransactionDetailsPage;
