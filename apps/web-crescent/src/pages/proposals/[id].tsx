import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import ProposalDetails from '@/screens/proposal_details';

const TokenDetailsPage: NextPage = () => <ProposalDetails />;

export const getStaticProps = withGetStaticProps('proposals');

export default TokenDetailsPage;
