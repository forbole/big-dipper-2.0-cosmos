import AccountDetails from '@src/screens/account_details';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AccountDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/accounts/${router.query.address}`);
  }, []);

  return (
    <AccountDetails />
  );
};

export default AccountDetailsPage;
