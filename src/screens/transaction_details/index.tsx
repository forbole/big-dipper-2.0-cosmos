import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Messages,
} from './components';
import { useTransactionDetails } from './hooks';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    state,
    onMessageFilterCallback,
    toggleMessageDisplay,
    filterMessages,
  } = useTransactionDetails();
  const {
    overview,
    messages,
  } = state;
  return (
    <Layout navTitle={t('transactionDetails')} title={t('transactionDetails')}>
      <LoadAndExist
        loading={state.loading}
        exists={state.exists}
      >
        <span className={classes.root}>
          <Overview
            data={overview}
          />
          <Messages
            className={classes.messages}
            messages={filterMessages(messages.items)}
            viewRaw={messages.viewRaw}
            toggleMessageDisplay={toggleMessageDisplay}
            onMessageFilterCallback={onMessageFilterCallback}
          />
        </span>
      </LoadAndExist>
    </Layout>
  );
};

export default TransactionDetails;
