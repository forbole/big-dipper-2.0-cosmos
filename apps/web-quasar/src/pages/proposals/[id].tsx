import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import ProposalDetails from '@/screens/proposal_details';
import nextI18NextConfig from '../../../next-i18next.config';

const TokenDetailsPage: NextPage = () => <ProposalDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'proposals');

export default TokenDetailsPage;
