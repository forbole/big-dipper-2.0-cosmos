import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Tokens from '@/screens/tokens';

const TokensPage: NextPage = () => <Tokens />;

export const getStaticProps = withGetStaticProps('tokens', 'transactions');

export default TokensPage;
