import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import BlockDetails from '@/screens/block_details';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getStaticProps = withGetStaticProps('blocks');

export default BlockDetailsPage;
