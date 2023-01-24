import withGetStaticProps from '@/pages/withGetStaticProps';
import BlockDetails from '@/screens/block_details';
import type { NextPage } from 'next';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getStaticProps = withGetStaticProps(
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlockDetailsPage;
