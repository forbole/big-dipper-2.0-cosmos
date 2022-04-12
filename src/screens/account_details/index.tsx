import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
  ContractOverview,
  ContractMessages,
} from '@components';
import { NextSeo } from 'next-seo';
import { useStyles } from './styles';
import {
  Overview,
  Balance,
  Staking,
  Transactions,
  OtherTokens,
  SimpleBalance,
} from './components';
import { useAccountDetails } from './hooks';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const {
    state,
  } = useAccountDetails();

  const isSmartContract = state.cosmwasm.result_contract_address === state.overview.address;

  return (
    <>
      <NextSeo
        title={isSmartContract ? t('smartContractDetails') : t('accountDetails')}
        openGraph={{
          title: isSmartContract ? t('smartContractDetails') : t('accountDetails'),
        }}
      />
      <Layout navTitle={isSmartContract ? t('smartContractDetails') : t('accountDetails')}>
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
            {isSmartContract
              ? (
                <ContractOverview
                  className={classes.overview}
                  address={state.cosmwasm.result_contract_address}
                  deployerAddress={state.cosmwasm.sender}
                  label={state.cosmwasm.label}
                  codeId={state.cosmwasm.code_id}
                />
              )
              : (
                <Overview
                  className={classes.overview}
                  withdrawalAddress={state.overview.withdrawalAddress}
                  address={state.overview.address}
                />
              )}
            {isSmartContract
              ? <SimpleBalance total={state.balance.total} />
              : (
                <Balance
                  className={classes.balance}
                  available={state.balance.available}
                  delegate={state.balance.delegate}
                  unbonding={state.balance.unbonding}
                  reward={state.balance.reward}
                  commission={state.balance.commission}
                  total={state.balance.total}
                />
              )}
            <OtherTokens
              className={classes.otherTokens}
              otherTokens={state.otherTokens}
            />
            {!isSmartContract
              && (
              <Staking
                className={classes.staking}
                rewards={state.rewards}
              />
              )}
            {isSmartContract
              ? (
                <ContractMessages
                  className={classes.transactions}
                  address={state.cosmwasm.result_contract_address}
                />
              )
              : (
                <Transactions
                  className={classes.transactions}
                />
              )}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
