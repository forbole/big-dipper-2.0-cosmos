import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Tokens from '@/screens/tokens';
import nextI18NextConfig from '../../../next-i18next.config';

const TokensPage: NextPage = () => <Tokens />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'tokens', 'transactions');

export default TokensPage;
