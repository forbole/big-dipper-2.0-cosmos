import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Blocks from '@/screens/blocks';

const BlocksPage: NextPage = () => <Blocks />;

export const getStaticProps = withGetStaticProps(
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlocksPage;
