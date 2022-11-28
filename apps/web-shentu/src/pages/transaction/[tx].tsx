import { useRouter } from 'next/router';
import { useEffect } from 'react';

const TransactionDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/transactions/${router.query.tx}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default TransactionDetailsPage;
