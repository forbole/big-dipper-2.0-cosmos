import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  console.log('router', router);

  useEffect(() => {
    const regex = /^\/@/;
    const regexCheck = regex.test(router.route);
    // const regexCheck = regex.test(router.query.dtag);
    console.log(router);

    if (!regexCheck) {
      router.replace('/');
    }
  }, []);

  return (
    <>hiii</>
  );
};

export default ProfilePage;
