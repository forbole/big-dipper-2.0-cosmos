import withGetStaticProps from '@/pages/withGetStaticProps';
import Assets from '@/screens/assets';
import type { NextPage } from 'next';

const AssetsPage: NextPage = () => <Assets />;

export const getStaticProps = withGetStaticProps('assets');

export default AssetsPage;
