import withGetStaticProps from '@/pages/withGetStaticProps';
import Home from '@/screens/home';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../next-i18next.config';

const HomePage: NextPage = () => <Home />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'home',
  'blocks',
  'transactions'
);

export default HomePage;
