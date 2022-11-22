import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import { useValidatorDetails } from './hooks';
import Profile from './components/profile';
import Stake from './components/stake';
import Overview from './components/overview';
import ContractDetails from './components/contract_details';
import Nodes from './components/nodes';
import Transactions from './components/transactions';
import { useStyles } from './styles';

const ValidatorDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { state } = useValidatorDetails();
  return (
    <>
      <NextSeo
        title={t('validatorDetails')}
        openGraph={{
          title: t('validatorDetails'),
        }}
      />
      <Layout navTitle={t('validatorDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <div className={classes.root}>
            <Profile className={classes.profile} profile={state.profile} />
            <Stake className={classes.stake} stake={state.stake} />
            <Overview className={classes.overview} overview={state.overview} />
            {state.isProvider && (
              <ContractDetails
                className={classes.contractDetails}
                contract={state.contract as any}
              />
            )}
            <Nodes className={classes.nodes} />
            {state.isProvider && (
              <Transactions
                provider={state.contract?.address as any}
                className={classes.transaction as any}
              />
            )}
          </div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default ValidatorDetails;
