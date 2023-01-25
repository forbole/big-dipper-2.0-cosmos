import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Providers from '@/screens/providers';

const ProvidersPage: NextPage = () => <Providers />;

export const getStaticProps = withGetStaticProps('providers');

export default ProvidersPage;
