import { useEffect } from 'react';
import { useRouter } from 'next/router';

function TransactionDetailsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/transactions/${router.query.tx}`);
  }, []);

  return null;
}

export default TransactionDetailsPage;
