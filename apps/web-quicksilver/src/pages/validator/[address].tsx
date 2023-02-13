import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import nextI18NextConfig from '../../../next-i18next.config';

const ValidatorDetailsPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/validators/${router.query.address}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export const getStaticProps = withGetStaticProps(
  nextI18NextConfig,
  'validators',
  'transactions',
  'accounts',
  'message_labels',
  'message_contents'
);

export default ValidatorDetailsPage;
