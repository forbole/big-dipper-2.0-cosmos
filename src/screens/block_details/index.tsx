import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
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

  return (
    <>
      <NextSeo
        title={t('blockDetails')}
        openGraph={{
          title: t('blockDetails'),
        }}
      />
      <Layout navTitle={t('blockDetails')}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
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
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default BlockDetails;
