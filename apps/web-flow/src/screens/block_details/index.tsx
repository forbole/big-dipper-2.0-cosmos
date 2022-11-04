import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@components/layout';
import LoadAndExist from '@components/load_and_exist';
import {
  Overview,
  Signatures,
  Transactions,
  // CollectionsAndBlockSeals,
} from './components';
import { useStyles } from './styles';
import {
  useBlockDetails,
} from './hooks';

const BlockDetails = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const state = useBlockDetails();
  const {
    overview,
    // signatures,
    // transactions,
  } = state;

  const transactions = [{
    height: 34567889,
    hash: '098765',
    success: true,
    timestamp: '0987654567890',
    messages: {
      count: 3,
      items: ['items'],
    },
  }];

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
          loading={false}
          exists
        >
          <span className={classes.root}>
            <Overview
              height={overview.height}
              hash={overview.hash}
              parentId={overview.parentId}
              timestamp={overview.timestamp}
              txs={overview.txs}
            />
            <Signatures
              className={classes.signatures}
              signatures={['+G+LAAAAAAAAAAAAAACwiiAMSwt7Y3SF7QEaeaxFLuW6pjRohJE/seFT0Jl7KNbXvZk8N8Lh96nBzYXx1l/WgLCwHUA1VSl/ZQ0s2SSm8eiFkcLTu/SWbIPj3ItmqXe98z2NefKfbezXxTNAjgYmo94=']}
            />
            {/* <Signatures
              className={classes.signatures}
              signatures={signatures}
            /> */}
            <Transactions
              transactions={transactions}
            />
            {/* <CollectionsAndBlockSeals /> */}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default BlockDetails;
