import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import MiniBlockDetails from '@/screens/miniblock_details';
import nextI18NextConfig from '../../../next-i18next.config';

const MiniBlockPage: NextPage = () => <MiniBlockDetails />;

export const getServerSideProps = withGetServerSideProps(
  nextI18NextConfig,
  'blocks',
  'transactions'
);

export default MiniBlockPage;
