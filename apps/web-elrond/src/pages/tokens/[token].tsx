import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import TokenDetails from '@/screens/token_details';

const TokenDetailsPage: NextPage = () => <TokenDetails />;

export const getServerSideProps = withGetServerSideProps('tokens', 'transactions');

export default TokenDetailsPage;
