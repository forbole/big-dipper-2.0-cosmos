import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import NFTDetails from '@/screens/nft_details';
import nextI18NextConfig from '../../../next-i18next.config';

const NFTDetailsPage: NextPage = () => <NFTDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'nfts', 'transactions');

export default NFTDetailsPage;
