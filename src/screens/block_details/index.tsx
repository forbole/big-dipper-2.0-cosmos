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
import { BlockProvider } from './contexts/block';
import { useBlockDetails } from './hooks';

const BlockDetails = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const { state } = useBlockDetails();
  const {
    overview, signatures,
  } = state;
  return (
    <Layout navTitle={t('blockDetails')} title={t('blockDetails')}>
      <BlockProvider>
        {({
          exists, loading,
        }) => {
          if (state.loading) {
            return <LinearLoading />;
          }

          if (!state.exists && !state.loading) {
            return <NotFound />;
          }

          return (
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
              <Transactions />
            </span>
          );
        }}
      </BlockProvider>
    </Layout>
  );
};

export default BlockDetails;
