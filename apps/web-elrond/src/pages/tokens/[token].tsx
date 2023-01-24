import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import TokenDetails from '@/screens/token_details';

const TokenDetailsPage: NextPage = () => <TokenDetails />;

export const getStaticProps = withGetStaticProps('tokens', 'transactions');

export default TokenDetailsPage;
