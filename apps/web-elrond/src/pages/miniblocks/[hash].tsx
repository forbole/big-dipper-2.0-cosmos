import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import MiniBlockDetails from '@/screens/miniblock_details';

const MiniBlockPage: NextPage = () => <MiniBlockDetails />;

export const getServerSideProps = withGetServerSideProps('blocks', 'transactions');

export default MiniBlockPage;
