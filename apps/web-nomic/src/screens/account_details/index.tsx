import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import DesmosProfile from '@/components/desmos_profile';
import { NextSeo } from 'next-seo';
import Overview from '@/screens/account_details/components/overview';
import { useStyles } from '@/screens/account_details/styles';
import Balance from '@/screens/account_details/components/balance';
import OtherTokens from '@/screens/account_details/components/other_tokens';
import { useAccountDetails } from '@/screens/account_details/hooks';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
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
          <span className={classes.root}>
            {!!state.desmosProfile && (
              <DesmosProfile
                dtag={state.desmosProfile.dtag}
                nickname={state.desmosProfile.nickname}
                imageUrl={state.desmosProfile.imageUrl}
                bio={state.desmosProfile.bio}
                connections={state.desmosProfile.connections}
                coverUrl={state.desmosProfile.coverUrl}
              />
            )}
            <Overview
              className={classes.overview}
              withdrawalAddress={state.overview.withdrawalAddress}
              address={state.overview.address}
            />
            <Balance
              className={classes.balance}
              available={state.balance.available}
              delegate={state.balance.delegate}
              total={state.balance.total}
            />
            <OtherTokens className={classes.otherTokens} otherTokens={state.otherTokens} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
