import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
  ContractOverview,
  ContractMessages,
  TabPanel,
} from '@components';
import { NextSeo } from 'next-seo';
import {
  Tabs,
} from './components/staking/components';
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
import Cw20TokenBalances from './components/cw20_token_balances';
import Cw20TokenOverview from './components/cw20_token_overview';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const {
    state,
    handleTabChange,
  } = useAccountDetails();

  const isSmartContract = state.cosmwasm.result_contract_address === state.overview.address;
  const isCw20Token = state.cw20TokenInfo.name && state.cw20TokenInfo.name !== '';

  let title = '';
  if (isCw20Token) {
    title = t('cw20TokenDetails');
  } else if (isSmartContract) {
    title = t('smartContractDetails');
  } else {
    title = t('accountDetails');
  }

  let overview;
  if (isCw20Token) {
    overview = (
      <Cw20TokenOverview
        className={classes.overview}
        tokenInfo={state.cw20TokenInfo}
      />
    );
  } else if (isSmartContract) {
    overview = (
      <ContractOverview
        className={classes.overview}
        address={state.cosmwasm.result_contract_address}
        deployerAddress={state.cosmwasm.sender}
        label={state.cosmwasm.label}
        codeId={state.cosmwasm.code_id}
        block={state.cosmwasm.transaction.block.height}
      />
    );
  } else {
    overview = (
      <Overview
        className={classes.overview}
        withdrawalAddress={state.overview.withdrawalAddress}
        address={state.overview.address}
      />
    );
  }

  const tabs = [
    {
      id: 0,
      key: 'transactions',
      component: (
        <Transactions
          className={classes.transactions}
          collateralTransactions={false}
        />
      ),
    },
    {
      id: 1,
      key: 'collateralTransactions',
      component: (
        <Transactions
          className={classes.transactions}
          collateralTransactions
        />
      ),
    },
  ];

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <Layout navTitle={title}>
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
            {overview}
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
            <Cw20TokenBalances
              className={classes.cw20TokenBalances}
              balances={state.cw20TokenBalances}
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
                <>
                  <Tabs
                    tab={state.tab}
                    handleTabChange={handleTabChange}
                    tabs={tabs}
                  />
                  {tabs.map((x) => {
                    return (
                      <TabPanel
                        key={x.id}
                        index={x.id}
                        value={state.tab}
                      >
                        {x.component}
                      </TabPanel>
                    );
                  })}
                </>
              )}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
