import withGetStaticProps from '@/pages/withGetStaticProps';
import ProfileDetails from '@/screens/profile_details';
import type { NextPage } from 'next';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getStaticProps = withGetStaticProps('profiles', 'accounts');

export default ProfileDetailsPage;
