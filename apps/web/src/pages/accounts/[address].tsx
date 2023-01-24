import withGetStaticProps from '@/pages/withGetStaticProps';
import AccountDetails from '@/screens/account_details';
import type { NextPage } from 'next';

const AccountDetailsPage: NextPage = () => <AccountDetails />;

export const getStaticProps = withGetStaticProps(
  'accounts',
  'transactions',
  'validators',
  'message_labels',
  'message_contents'
);

export default AccountDetailsPage;
