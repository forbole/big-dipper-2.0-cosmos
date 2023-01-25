import withGetServerSideProps from '@/pages/withGetServerSideProps';
import BlockDetails from '@/screens/block_details';
import type { NextPage } from 'next';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getServerSideProps = withGetServerSideProps(
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlockDetailsPage;
