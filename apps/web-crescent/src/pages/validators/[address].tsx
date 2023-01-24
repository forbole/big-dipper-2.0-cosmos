import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import ValidatorDetails from '@/screens/validator_details';

const ValidatorDetailsPage: NextPage = () => <ValidatorDetails />;

export const getStaticProps = withGetStaticProps(
  'validators',
  'transactions',
  'accounts',
  'message_labels',
  'message_contents'
);

export default ValidatorDetailsPage;
