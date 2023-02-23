import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Validators from '@/screens/validators';
import nextI18NextConfig from '../../../next-i18next.config';

const ValidatorsPage: NextPage = () => <Validators />;

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'validators',
  'nodes',
  'transactions'
);

export default ValidatorsPage;
