import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Tokens from '@/screens/proposals';

const TokensPage: NextPage = () => <Tokens />;

export const getStaticProps = withGetStaticProps('proposals');

export default TokensPage;
