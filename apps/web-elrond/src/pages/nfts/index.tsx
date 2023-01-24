import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Nfts from '@/screens/nfts';

const NftsPage: NextPage = () => <Nfts />;

export const getStaticProps = withGetStaticProps('nfts', 'transactions');

export default NftsPage;
