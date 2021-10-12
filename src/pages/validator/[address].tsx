import ValidatorDetails from '@screens/validator_details';
import { useRouter } from 'next/router';

const ValidatorDetailsPage = () => {
  const router = useRouter();

  console.log('router=>', router);
  console.log('router.asPath=>', router.asPath);
  //   console.log('`validator/${router.query.address}`=>', `validator/${router.query.address}`);

  if (router.asPath === `validator/${router.query.address}`) {
    console.log('should redirect');
    router.replace(`/validators/${router.query.address}`);
  }

  return (
    <ValidatorDetails />
  );
};

export default ValidatorDetailsPage;
