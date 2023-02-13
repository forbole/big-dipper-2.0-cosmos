import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import NodeDetails from '@/screens/node_details';
import nextI18NextConfig from '../../../next-i18next.config';

const NodeDetailsPage: NextPage = () => <NodeDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'nodes', 'blocks');

export default NodeDetailsPage;
