import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { useStyles } from './styles';
import { useProfileDetails } from './hooks';

const ProfileDetails = () => {
  const router = useRouter();
  const { t } = useTranslation('profiles');
  const classes = useStyles();
  const {
    state,
  } = useProfileDetails();

  useEffect(() => {
    const regex = /^\/@/;
    const regexCheck = regex.test(router.route);
    // const regexCheck = regex.test(router.query.dtag);

    if (!regexCheck) {
      router.replace('/');
    }
  }, []);

  console.log('router', router);
  console.log('state => ', state);
  console.log('classes => ', classes);

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
          exists={state.exists}
          loading={state.loading}
        >
          {/* <div>Why the ui doesnt show</div> */}
          <span className={classes.root}>
            {/* <div>HIIIIIII</div> */}
            <DesmosProfile
              dtag="hiii"
              nickname="good"
              imageUrl="www.www"
              bio="a dophoe"
              connections={[
                {
                  network: 'native',
                  identifier: 'desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv',
                  creationTime: '2021-08-31T17:02:28.575104',
                }]}
              coverUrl="url"
            />
            {!!state.desmosProfile && (
              <>
                <DesmosProfile
                  dtag={state.desmosProfile.dtag}
                  nickname={state.desmosProfile.nickname}
                  imageUrl={state.desmosProfile.imageUrl}
                  bio={state.desmosProfile.bio}
                  connections={state.desmosProfile.connections}
                  coverUrl={state.desmosProfile.coverUrl}
                />
                {/* <Connections
                  data={props.connections}
                /> */}
              </>
            )}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ProfileDetails;
