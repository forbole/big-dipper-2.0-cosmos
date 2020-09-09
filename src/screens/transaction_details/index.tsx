import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  Overview, Instructions,
} from './components';
import { TransactionProvider } from './contexts/transaction';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  return (
    <Layout navTitle={t('transactionDetails')} className={classes.root}>
      <TransactionProvider>
        <Overview />
        <Instructions className={classes.instructions} />
      </TransactionProvider>
    </Layout>
  );
};

export default TransactionDetails;
