import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import ProfileDetails from '@/screens/profile_details';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getStaticProps = withGetStaticProps('profiles', 'accounts');

export default ProfileDetailsPage;
