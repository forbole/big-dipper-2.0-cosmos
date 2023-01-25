import withGetStaticProps from '@/pages/withGetStaticProps';
import Blocks from '@/screens/blocks';
import type { NextPage } from 'next';

const BlocksPage: NextPage = () => <Blocks />;

export const getStaticProps = withGetStaticProps(
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlocksPage;
