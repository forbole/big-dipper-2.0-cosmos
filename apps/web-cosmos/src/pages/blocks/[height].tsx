import withGetStaticProps from '@/pages/withGetStaticProps';
import BlockDetails from '@/screens/block_details';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlockDetailsPage;
