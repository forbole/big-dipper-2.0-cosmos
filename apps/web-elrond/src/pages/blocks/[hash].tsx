import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import BlockDetails from '@/screens/block_details';
import nextI18NextConfig from '../../../next-i18next.config';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getServerSideProps = withGetServerSideProps(nextI18NextConfig, 'blocks');

export default BlockDetailsPage;
