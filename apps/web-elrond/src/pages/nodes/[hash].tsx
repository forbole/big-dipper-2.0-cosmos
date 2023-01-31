import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import NodeDetails from '@/screens/node_details';
import nextI18NextConfig from '../../../next-i18next.config';

const NodeDetailsPage: NextPage = () => <NodeDetails />;

export const getServerSideProps = withGetServerSideProps(nextI18NextConfig, 'nodes', 'blocks');

export default NodeDetailsPage;
