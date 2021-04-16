import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
  LinearLoading,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Messages,
} from './components';
import { TransactionProvider } from './contexts/transaction';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  return (
    <Layout navTitle={t('transactionDetails')}>
      <TransactionProvider>
        {({
          exists, loading,
        }) => {
          if (loading) {
            return <LinearLoading />;
          }

          if (!exists && !loading) {
            return <NotFound />;
          }

          return (
            <span className={classes.root}>
              <Overview />
              <Messages className={classes.messages} />
            </span>
          );
        }}
      </TransactionProvider>
    </Layout>
  );
};

export default TransactionDetails;
