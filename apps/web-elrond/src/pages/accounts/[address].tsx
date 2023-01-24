import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import AccountDetails from '@/screens/account_details';

const AccountDetailsPage: NextPage = () => <AccountDetails />;

export const getStaticProps = withGetStaticProps('accounts', 'transactions');

export default AccountDetailsPage;
