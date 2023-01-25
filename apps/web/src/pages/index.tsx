import withGetStaticProps from '@/pages/withGetStaticProps';
import Home from '@/screens/home';
import type { NextPage } from 'next';

const HomePage: NextPage = () => <Home />;

export const getStaticProps = withGetStaticProps('home', 'blocks', 'transactions');

export default HomePage;
