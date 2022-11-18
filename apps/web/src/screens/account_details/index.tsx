import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Layout from 'ui/components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import DesmosProfile from 'ui/components/desmos_profile';
import { NextSeo } from 'next-seo';
import Balance from 'ui/screens/account_details/components/balance';
import OtherTokens from 'ui/screens/account_details/components/other_tokens';
import Overview from 'ui/screens/account_details/components/overview';
import Staking from 'ui/screens/account_details/components/staking';
import { useStyles } from './styles';
import Transactions from './components/transactions';
import { useAccountDetails } from './hooks';

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
              unbonding={state.balance.unbonding}
              reward={state.balance.reward}
              commission={state.balance.commission}
              total={state.balance.total}
            />
            <OtherTokens className={classes.otherTokens} otherTokens={state.otherTokens} />
            <Staking className={classes.staking} rewards={state.rewards} />
            <Transactions className={classes.transactions} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
