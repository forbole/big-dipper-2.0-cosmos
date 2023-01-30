import withGetServerSideProps from '@/pages/withGetServerSideProps';
import ValidatorDetails from '@/screens/validator_details';
import type { NextPage } from 'next';

const ValidatorDetailsPage: NextPage = () => <ValidatorDetails />;

export const getServerSideProps = withGetServerSideProps(
  'validators',
  'transactions',
  'accounts',
  'message_labels',
  'message_contents'
);

export default ValidatorDetailsPage;
