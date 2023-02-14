import withGetStaticProps from '@/pages/withGetStaticProps';
import ProfileDetails from '@/screens/profile_details';
import type { NextPage } from 'next';
import nextI18NextConfig from '../../next-i18next.config';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' });
export const getStaticProps = withGetStaticProps(nextI18NextConfig, 'profiles', 'accounts');

export default ProfileDetailsPage;
