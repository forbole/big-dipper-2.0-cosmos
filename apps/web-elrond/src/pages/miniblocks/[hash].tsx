import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import MiniBlockDetails from '@/screens/miniblock_details';

const MiniBlockPage: NextPage = () => <MiniBlockDetails />;

export const getStaticProps = withGetStaticProps('blocks', 'transactions');

export default MiniBlockPage;
