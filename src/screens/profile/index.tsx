import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { useStyles } from '../validator_details/styles';
import {
  Profile,
} from '../validator_details/components';
// import { useProfileDetails } from './hooks';

const ProfileDetails = () => {
  const router = useRouter();
  console.log('router', router);
  const { t } = useTranslation('profiles');
  const classes = useStyles();
  // const {
  //   state,
  // } = useProfileDetails();
  // const {
  //   overview,
  //   desmosProfile,
  // } = state;

  // useEffect(() => {
  //   const regex = /^\/@/;
  //   const regexCheck = regex.test(router.route);
  //   // const regexCheck = regex.test(router.query.dtag);
  //   console.log(router);

  //   if (!regexCheck) {
  //     router.replace('/');
  //   }
  // }, []);

  return (
    <>
      <NextSeo
        title={t('profileDetails')}
        openGraph={{
          title: t('profileDetails'),
        }}
      />
      <Layout navTitle={t('profileDetails')}>
        {/* <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        > */}
        {/* <span className={classes.root}>
            {desmosProfile ? (
              <DesmosProfile
                className={classes.profile}
                dtag={desmosProfile.dtag}
                nickname={desmosProfile.nickname}
                imageUrl={desmosProfile.imageUrl}
                coverUrl={desmosProfile.coverUrl}
                bio={desmosProfile.bio}
                connections={desmosProfile.connections}
              />
            ) : (
              <Profile
                className={classes.profile}
                validator={overview.validator}
                operatorAddress={overview.operatorAddress}
                selfDelegateAddress={overview.selfDelegateAddress}
                description={overview.description}
                website={overview.website}
              />
            )}
          </span> */}
        {/* </LoadAndExist> */}
      </Layout>
    </>
  );
};

export default ProfileDetails;
