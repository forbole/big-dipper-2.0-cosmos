import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/layout';
import LoadAndExist from '@components/load_and_exist';
import DesmosProfile from '@components/desmos_profile';
import { useStyles } from './styles';
import Connections from './components/connections';
import { useProfileDetails } from './hooks';

const ProfileDetails = () => {
  const { t } = useTranslation('profiles');
  const classes = useStyles();
  const { state } = useProfileDetails();

  return (
    <>
      <NextSeo
        title={t('profileDetails')}
        openGraph={{
          title: t('profileDetails'),
        }}
      />
      <Layout navTitle={t('profileDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          {!!state.desmosProfile && (
            <span className={classes.root}>
              <DesmosProfile
                dtag={state.desmosProfile.dtag}
                nickname={state.desmosProfile.nickname}
                imageUrl={state.desmosProfile.imageUrl}
                bio={state.desmosProfile.bio}
                connections={[]}
                coverUrl={state.desmosProfile.coverUrl}
              />
              <Connections data={state.desmosProfile.connections} />
            </span>
          )}
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ProfileDetails;
