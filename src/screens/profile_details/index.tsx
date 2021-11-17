import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { useStyles } from './styles';
import { Connections } from './components';
import {} from '@graphql/types';
import { useProfileDetails } from './hooks';

const ProfileDetails = () => {
  const router = useRouter();
  const { t } = useTranslation('profiles');
  const classes = useStyles();
  const {
    state,
  } = useProfileDetails();

  const profileIsNotEnabled = false;
  const regex = /^@/;

  const profileDtag = router.query.dtag as string;
  const regexCheck = regex.test(profileDtag);

  console.log('dtag', profileDtag);
  console.log('regexCheck', regexCheck);
  console.log('profileIsNotEnabled', profileIsNotEnabled);

  if (!regexCheck || !profileIsNotEnabled) {
    console.log('one of them is false so return to homepage');
    router.replace('/');
  } else {
    return (
      <>
        <NextSeo
          title={t('profileDetails')}
          openGraph={{
            title: t('profileDetails'),
          }}
        />
        <Layout navTitle={t('profileDetails')}>
          <LoadAndExist
            loading={false}
            exists
          >
            {state.desmosProfile
          && (
          <span className={classes.root}>
            <DesmosProfile
              dtag={state.desmosProfile.dtag}
              nickname={state.desmosProfile.nickname}
              imageUrl={state.desmosProfile.imageUrl}
              bio={state.desmosProfile.bio}
              connections={[]}
              coverUrl={state.desmosProfile.coverUrl}
            />
            <Connections
              data={state.desmosProfile.connections}
            />
          </span>
          )}
          </LoadAndExist>
        </Layout>
      </>
    );
  }
};

export default ProfileDetails;
