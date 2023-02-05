import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Home from '@/screens/home';
import nextI18NextConfig from '../../next-i18next.config';

const HomePage: NextPage = () => <Home />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'home',
  'blocks',
  'transactions'
);

export default HomePage;
