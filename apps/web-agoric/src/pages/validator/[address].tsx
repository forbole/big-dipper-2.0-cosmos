import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ValidatorDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/validators/${router.query.address}`);
  }, [router]);

  return null;
};

export default ValidatorDetailsPage;
