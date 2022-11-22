import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Layout from '@components/layout';
import LoadAndExist from 'ui/components/load_and_exist';
import Action from './components/action';
import Data from './components/data';
import Operations from './components/operations';
import Overview from './components/overview';
import SmartContractResults from './components/smart_contract_results';
import { useTransactionDetails } from './hooks';
import { useStyles } from './styles';

const TransactionDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');
  const { state } = useTransactionDetails();
  return (
    <>
      <NextSeo
        title={t('transactionDetails')}
        openGraph={{
          title: t('transactionDetails'),
        }}
      />
      <Layout navTitle={t('transactionDetails')} className={classes.root}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <Overview {...state.overview} />
          {!!state.data && <Data data={state.data} />}
          {!!state.action && <Action {...state.action} />}
          {!!state.operations.length && <Operations items={state.operations} />}
          {!!state.results.length && <SmartContractResults results={state.results} />}
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TransactionDetails;
