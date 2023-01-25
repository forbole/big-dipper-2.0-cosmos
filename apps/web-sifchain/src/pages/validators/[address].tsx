import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import ValidatorDetails from '@/screens/validator_details';

const ValidatorDetailsPage: NextPage = () => <ValidatorDetails />;

export const getServerSideProps = withGetServerSideProps(
  'validators',
  'transactions',
  'accounts',
  'message_labels',
  'message_contents'
);

export default ValidatorDetailsPage;
