import withGetServerSideProps from '@/pages/withGetServerSideProps';
import ProfileDetails from '@/screens/profile_details';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../next-i18next.config';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getServerSideProps = withGetServerSideProps(nextI18NextConfig, 'profiles', 'accounts');

export default ProfileDetailsPage;
