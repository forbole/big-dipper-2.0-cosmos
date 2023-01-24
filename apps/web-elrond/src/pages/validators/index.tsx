import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Validators from '@/screens/validators';

const ValidatorsPage: NextPage = () => <Validators />;

export const getStaticProps = withGetStaticProps('validators', 'nodes', 'transactions');

export default ValidatorsPage;
