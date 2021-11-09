import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';

const ProfileDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
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
          // loading={state.loading}
          // exists={state.exists}
        >
          <span className={classes.root}>
            <div>hello world again</div>
          </span>
        </LoadAndExist>
      </Layout>
    </>

  );
};

export default ProfileDetails;
