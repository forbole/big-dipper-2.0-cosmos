import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import { NextSeo } from 'next-seo';
import { useStyles } from './styles';
import {
  Overview,
  Balance,
  Staking,
  Transactions,
  OtherTokens,
} from './components';
import { useAccountDetails } from './hooks';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useAccountDetails();
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
          loading={state.loading}
          exists={state.exists}
        >
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
            <OtherTokens
              className={classes.otherTokens}
              otherTokens={state.otherTokens}
            />
            <Staking
              className={classes.staking}
              redelegations={state.redelegations}
              delegations={state.delegations}
              unbondings={state.unbondings}
            />
            <Transactions
              className={classes.transactions}
              loadNextPage={loadNextPage}
              data={state.transactions.data}
              hasNextPage={state.transactions.hasNextPage}
              isNextPageLoading={state.transactions.isNextPageLoading}
            />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
