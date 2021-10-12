import ValidatorDetails from '@screens/validator_details';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ValidatorDetailsPage = () => {
  const router = useRouter();

  console.log('router=>', router);
  console.log('router.asPath=>', router.asPath);
  //   console.log('`validator/${router.query.address}`=>', `validator/${router.query.address}`);

  useEffect(() => {
    router.replace(`/validators/${router.query.address}`);
  }, []);

  return (
    <ValidatorDetails />
  );
};

export default ValidatorDetailsPage;
