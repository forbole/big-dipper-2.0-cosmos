import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ValidatorDetails from '@screens/validator_details';

const ProfilePage = () => {
  const router = useRouter();
  console.log('router', router);

  useEffect(() => {
    const regex = /^\/@/;
    const regexCheck = regex.test(router.route);
    // const regexCheck = regex.exec(router.route); //null
    // const regexCheck = router.route.match(regex);
    // console.log('regexCheck', regexCheck);

    if (!regexCheck) {
      router.replace('/');
    }
  }, []);

  return (
    // <ValidatorDetails />
    <>hiii</>
  );
};

export default ProfilePage;
