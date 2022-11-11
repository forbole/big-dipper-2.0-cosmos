import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  ContractMessages,
} from '@components';
import { NextSeo } from 'next-seo';
import Cw20TokenOverview from './components/overview';
import { useStyles } from './styles';
import { useTokenDetails } from './hooks';

const TokenDetails = () => {
  const { t } = useTranslation('token');
  const classes = useStyles();
  const { state } = useTokenDetails();
  const title = t('cw20TokenDetails');

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{ title }}
      />
      <Layout navTitle={title}>
        <span className={classes.root}>
          <Cw20TokenOverview
            className={classes.overview}
            tokenInfo={state}
          />
          <ContractMessages
            className={classes.transactions}
            address={state.address}
          />
        </span>
      </Layout>
    </>
  );
};

export default TokenDetails;
