import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/layout';
import LoadAndExist from '@components/load_and_exist';
import { useStyles } from './styles';
import { useAccountDetails } from './hooks';
import {
  Profile,
  Transactions,
  Overview,
  Tokens,
  Nfts,
} from './components';

const AccountDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { state } = useAccountDetails();
  return (
    <>
      <NextSeo
        title={t('accountDetails')}
        openGraph={{
          title: t('accountDetails'),
        }}
      />
      <Layout
        navTitle={t('accountDetails')}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <div className={classes.root}>
            <Profile className={classes.profile} profile={state.profile} />
            <Overview className={classes.overview} overview={state.overview} />
            <Tokens />
            <Nfts />
            <Transactions className={classes.transactions} />
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
