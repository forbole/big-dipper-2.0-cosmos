import withGetStaticProps from '@/pages/withGetStaticProps';
import Blocks from '@/screens/blocks';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const BlocksPage: NextPage = () => <Blocks />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlocksPage;
