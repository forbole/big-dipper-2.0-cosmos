import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Validators from '@/screens/validators';

const ValidatorsPage: NextPage = () => <Validators />;

export const getStaticProps = withGetStaticProps(
  'validators',
  'transactions',
  'accounts',
  'message_labels',
  'message_contents'
);

export default ValidatorsPage;
