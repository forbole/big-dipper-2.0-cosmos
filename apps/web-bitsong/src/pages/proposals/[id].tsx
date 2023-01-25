import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import ProposalDetails from '@/screens/proposal_details';

const TokenDetailsPage: NextPage = () => <ProposalDetails />;

export const getServerSideProps = withGetServerSideProps('proposals');

export default TokenDetailsPage;
