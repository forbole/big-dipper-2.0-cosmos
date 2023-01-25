import withGetServerSideProps from '@/pages/withGetServerSideProps';
import ProfileDetails from '@/screens/profile_details';
import type { NextPage } from 'next';

const ProfileDetailsPage: NextPage = () => <ProfileDetails />;

export const getServerSideProps = withGetServerSideProps('profiles', 'accounts');

export default ProfileDetailsPage;
