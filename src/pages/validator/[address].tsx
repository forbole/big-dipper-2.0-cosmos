import ValidatorDetails from '@screens/validator_details';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ValidatorDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/validators/${router.query.address}`);
  }, []);

  return (
    <ValidatorDetails />
  );
};

export default ValidatorDetailsPage;
