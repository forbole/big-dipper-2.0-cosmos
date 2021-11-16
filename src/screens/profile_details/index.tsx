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
            <Connections
              data={state.desmosProfile.connections}
            />
          </span>
          )}
        </LoadAndExist>
      </Layout>
    </>

  );
};

export default ProfileDetails;
