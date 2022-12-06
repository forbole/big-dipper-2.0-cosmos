import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ValidatorDetailsPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/validators/${router.query.address}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ValidatorDetailsPage;
