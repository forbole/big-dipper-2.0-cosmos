import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import Action from '@/screens/transaction_details/components/action';
import Data from '@/screens/transaction_details/components/data';
import Operations from '@/screens/transaction_details/components/operations';
import Overview from '@/screens/transaction_details/components/overview';
import SmartContractResults from '@/screens/transaction_details/components/smart_contract_results';
import { useTransactionDetails } from '@/screens/transaction_details/hooks';
import { useStyles } from '@/screens/transaction_details/styles';

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
