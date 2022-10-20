import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Logs,
  Instructions,
} from './components';
import { useTransactionDetails } from './hooks';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { state } = useTransactionDetails();

  return (
    <>
      <NextSeo
        title={t('transactionDetails')}
        openGraph={{
          title: t('transactionDetails'),
        }}
      />
      <Layout navTitle={t('transactionDetails')}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <span className={classes.root}>
            <Overview
              data={state.overview}
            />
            <Instructions instructions={state.instructions} />
            <Logs logs={state.logs} />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TransactionDetails;
