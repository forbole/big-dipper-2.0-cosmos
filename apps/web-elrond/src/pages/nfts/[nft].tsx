import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import NFTDetails from '@/screens/nft_details';
import nextI18NextConfig from '../../../next-i18next.config';

const NFTDetailsPage: NextPage = () => <NFTDetails />;

export const getServerSideProps = withGetServerSideProps(nextI18NextConfig, 'nfts', 'transactions');

export default NFTDetailsPage;
