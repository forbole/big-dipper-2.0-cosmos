import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AccountDetailsPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/accounts/${router.query.address}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export const getStaticProps = withGetStaticProps(
  'accounts',
  'transactions',
  'validators',
  'message_labels',
  'message_contents'
);

export default AccountDetailsPage;
