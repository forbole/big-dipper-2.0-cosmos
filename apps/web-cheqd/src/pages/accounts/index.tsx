import Accounts from '@/screens/accounts';
import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../../next-i18next.config';

const AccountsPage: NextPage = () => <Accounts />;

export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'accounts', 'common');

export default AccountsPage;
