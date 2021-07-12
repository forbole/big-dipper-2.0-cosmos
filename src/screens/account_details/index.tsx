import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { chainConfig } from '@configs';
import { useStyles } from './styles';
import {
  Overview,
  Balance,
  Staking,
  Transactions,
  OtherTokens,
  DesmosProfileBio,
  DesmosProfileInfo,
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
    <Layout navTitle={t('accountDetails')} title={t('accountDetails')}>
      <LoadAndExist
        loading={state.loading}
        exists={state.exists}
      >
        <span className={classes.root}>
          <Overview
            className={classes.overview}
            withdrawalAddress={state.overview.withdrawalAddress}
            address={state.overview.address}
          />
          {chainConfig.extra.desmosProfile && (
            <>
              <DesmosProfileBio
                dtag="ryuash"
                nickname="ryuash"
                imageUrl="https://cdn.dribbble.com/users/1223630/screenshots/8115260/char_still_2x.gif?compress=1&resize=400x300"
              />
              <DesmosProfileInfo />
            </>
          )}
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
  );
};

export default AccountDetails;
