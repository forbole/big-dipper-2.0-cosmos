import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Home from '@/screens/home';

const HomePage: NextPage = () => <Home />;

export const getStaticProps = withGetStaticProps('home', 'blocks', 'transactions');

export default HomePage;
