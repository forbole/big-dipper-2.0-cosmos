import TransactionDetails from '@src/screens/transaction_details';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TransactionDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/transactions/${router.query.tx}`);
  }, []);

  return (
    <TransactionDetails />
  );
};

export default TransactionDetailsPage;
