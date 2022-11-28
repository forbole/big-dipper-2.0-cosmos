import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import { useStyles } from '@/screens/account_details/styles';
import { useAccountDetails } from '@/screens/account_details/hooks';
import Profile from '@/screens/account_details/components/profile';
import Transactions from '@/screens/account_details/components/transactions';
import Overview from '@/screens/account_details/components/overview';
import Tokens from '@/screens/account_details/components/tokens';
import Nfts from '@/screens/account_details/components/nfts';

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
      <Layout navTitle={t('accountDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
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
