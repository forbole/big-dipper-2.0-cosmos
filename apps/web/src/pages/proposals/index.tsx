import withGetStaticProps from '@/pages/withGetStaticProps';
import Tokens from '@/screens/proposals';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const TokensPage: NextPage = () => <Tokens />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'proposals');

export default TokensPage;
