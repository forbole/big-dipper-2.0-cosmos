import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Blocks from '@/screens/blocks';

const BlocksPage: NextPage = () => <Blocks />;

export const getStaticProps = withGetStaticProps('blocks');

export default BlocksPage;
