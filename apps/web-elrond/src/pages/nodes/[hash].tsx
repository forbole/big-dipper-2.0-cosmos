import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import NodeDetails from '@/screens/node_details';

const NodeDetailsPage: NextPage = () => <NodeDetails />;

export const getStaticProps = withGetStaticProps('nodes', 'blocks');

export default NodeDetailsPage;
