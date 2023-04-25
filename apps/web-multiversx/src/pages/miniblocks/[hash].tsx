import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import MiniBlockDetails from '@/screens/miniblock_details';
import nextI18NextConfig from '../../../next-i18next.config';

const MiniBlockPage: NextPage = () => <MiniBlockDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'blocks', 'transactions');

export default MiniBlockPage;
