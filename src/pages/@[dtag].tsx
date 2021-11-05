import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ValidatorDetails from '@screens/validator_details';

const ProfilePage = () => {
  const router = useRouter();
  console.log('router', router);

  useEffect(() => {
    const regex = /^@\//;
    const regexCheck = regex.exec(router.route);
    if (regexCheck) {
      router.replace('/');
    }
  }, []);

  return (
    <ValidatorDetails />
  );
};

export default ProfilePage;
