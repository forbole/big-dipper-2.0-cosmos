import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  NotFound,
  LinearLoading,
} from '@components';
import {
  Overview,
  Transactions,
  Signatures,
} from './components';
import { useStyles } from './styles';
import { useBlockDetails } from './hooks';

const BlockDetails = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const { state } = useBlockDetails();
  const {
    overview,
    signatures,
    transactions,
  } = state;
  console.log(state, 'give me state');
  let component = null;

  if (state.loading) {
    component = <LinearLoading />;
  } else if (!state.exists && !state.loading) {
    component = <NotFound />;
  } else {
    component = (
      <span className={classes.root}>
        <Overview
          height={overview.height}
          hash={overview.hash}
          proposer={overview.proposer}
          timestamp={overview.timestamp}
          txs={overview.txs}
        />
        <Signatures
          className={classes.signatures}
          signatures={signatures}
        />
        <Transactions
          transactions={transactions}
        />
      </span>
    );
  }

  return (
    <Layout navTitle={t('blockDetails')} title={t('blockDetails')}>
      {component}
    </Layout>
  );
};

export default BlockDetails;
