import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import AccountDetails from '@/screens/account_details';
import nextI18NextConfig from '../../../next-i18next.config';

const AccountDetailsPage: NextPage = () => <AccountDetails />;

export const getServerSideProps = withGetServerSideProps(
  nextI18NextConfig,
  'accounts',
  'transactions',
  'validators',
  'message_labels',
  'message_contents'
);

export default AccountDetailsPage;
