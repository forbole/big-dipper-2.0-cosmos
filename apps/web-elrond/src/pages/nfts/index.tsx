import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Nfts from '@/screens/nfts';
import nextI18NextConfig from '../../../next-i18next.config';

const NftsPage: NextPage = () => <Nfts />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'nfts', 'transactions');

export default NftsPage;
