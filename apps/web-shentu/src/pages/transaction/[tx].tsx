import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const TransactionDetailsPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/transactions/${router.query.tx}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export const getServerSideProps = withGetServerSideProps(
  'transactions',
  'message_labels',
  'message_contents'
);

export default TransactionDetailsPage;
