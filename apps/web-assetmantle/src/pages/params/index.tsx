import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Params from '@/screens/params';

const ParamsPage: NextPage = () => <Params />;

export const getStaticProps = withGetStaticProps('params');

export default ParamsPage;
