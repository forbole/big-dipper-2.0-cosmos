import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import ProposalDetails from '@/screens/proposal_details';
import nextI18NextConfig from '../../../next-i18next.config';

const TokenDetailsPage: NextPage = () => <ProposalDetails />;

export const getServerSideProps = withGetServerSideProps(nextI18NextConfig, 'proposals');

export default TokenDetailsPage;
