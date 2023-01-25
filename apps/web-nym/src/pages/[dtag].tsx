import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import ProfileDetails from '@/screens/profile_details';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getServerSideProps = withGetServerSideProps('profiles', 'accounts');

export default ProfileDetailsPage;
