import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Assets from '@/screens/assets';

const AssetsPage: NextPage = () => <Assets />;

export const getStaticProps = withGetStaticProps('assets');

export default AssetsPage;
