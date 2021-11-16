import React from 'react';
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
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const {
    state,
  } = useProfileDetails();
  console.log('state => ', state);

  return (
    <>
      <NextSeo
        title={t('accountDetails')}
        openGraph={{
          title: t('accountDetails'),
        }}
      />
      <Layout navTitle={t('accountDetails')}>
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
            {/* <DesmosProfile
              dtag="hiii"
              nickname="good"
              imageUrl="www.www"
              bio="a dophoe"
              connections={[]}
              coverUrl="url"
            /> */}
            <Connections
              data={[
                {
                  network: 'native',
                  identifier: 'desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv',
                  creationTime: '2021-08-31T17:02:28.575104',
                },
                {
                  network: 'emoney',
                  identifier: 'emoney1wke3ev9ja6rxsngld75r3vppcpet94xxnh63ry',
                  creationTime: '2021-08-31T17:02:28.575104',
                }]}
            />
          </span>
          )}
        </LoadAndExist>
      </Layout>
    </>

  );
};

export default ProfileDetails;
