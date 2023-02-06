import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Providers from '@/screens/providers';
import nextI18NextConfig from '../../../next-i18next.config';

const ProvidersPage: NextPage = () => <Providers />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'providers');

export default ProvidersPage;
