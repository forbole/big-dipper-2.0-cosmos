import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ValidatorDetailsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/validators/${router.query.address}`);
  }, []);

  return null;
}

export default ValidatorDetailsPage;
