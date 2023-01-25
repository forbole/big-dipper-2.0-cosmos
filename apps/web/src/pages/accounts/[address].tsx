import withGetServerSideProps from '@/pages/withGetServerSideProps';
import AccountDetails from '@/screens/account_details';
import type { NextPage } from 'next';

const AccountDetailsPage: NextPage = () => <AccountDetails />;

export const getServerSideProps = withGetServerSideProps(
  'accounts',
  'transactions',
  'validators',
  'message_labels',
  'message_contents'
);

export default AccountDetailsPage;
