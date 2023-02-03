import withGetStaticProps from '@/pages/withGetStaticProps';
import NotFound from '@/screens/404';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../next-i18next.config';

const Custom404: NextPage = () => <NotFound />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig);

export default Custom404;
