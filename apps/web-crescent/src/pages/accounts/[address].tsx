import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import AccountDetails from '@/screens/account_details';

const AccountDetailsPage: NextPage = () => <AccountDetails />;

export const getServerSideProps = withGetServerSideProps(
  'accounts',
  'transactions',
  'validators',
  'message_labels',
  'message_contents'
);

export default AccountDetailsPage;
