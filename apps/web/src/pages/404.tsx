import withGetStaticProps from '@/pages/withGetStaticProps';
import NotFound from '@/screens/404';
import type { NextPage } from 'next';

const Custom404: NextPage = () => <NotFound />;

export const getStaticProps = withGetStaticProps();

export default Custom404;
