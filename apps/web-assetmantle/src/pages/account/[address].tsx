import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AccountDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/accounts/${router.query.address}`);
  }, [router]);

  return null;
};

export default AccountDetailsPage;
