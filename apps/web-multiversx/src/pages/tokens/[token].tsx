import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import TokenDetails from '@/screens/token_details';
import nextI18NextConfig from '../../../next-i18next.config';

const TokenDetailsPage: NextPage = () => <TokenDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'tokens', 'transactions');

export default TokenDetailsPage;
