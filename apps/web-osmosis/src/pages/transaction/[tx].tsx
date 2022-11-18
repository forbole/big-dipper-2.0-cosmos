import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TransactionDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/transactions/${router.query.tx}`);
  }, [router]);

  return null;
};

export default TransactionDetailsPage;
