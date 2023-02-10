import withGetServerSideProps from '@/pages/withGetServerSideProps';
import BlockDetails from '@/screens/block_details';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getServerSideProps = withGetServerSideProps(
  nextI18NextConfig,
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlockDetailsPage;
