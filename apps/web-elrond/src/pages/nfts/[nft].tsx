import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import NFTDetails from '@/screens/nft_details';

const NFTDetailsPage: NextPage = () => <NFTDetails />;

export const getServerSideProps = withGetServerSideProps('nfts', 'transactions');

export default NFTDetailsPage;
