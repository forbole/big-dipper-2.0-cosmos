import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import NodeDetails from '@/screens/node_details';

const NodeDetailsPage: NextPage = () => <NodeDetails />;

export const getServerSideProps = withGetServerSideProps('nodes', 'blocks');

export default NodeDetailsPage;
