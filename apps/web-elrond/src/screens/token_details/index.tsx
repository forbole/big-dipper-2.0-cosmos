import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import {
  Profile,
  Overview,
  Stats,
  Transactions,
} from './components';
import { useStyles } from './styles';
import { useTokenDetails } from './hooks';

const TokenDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('tokens');
  const { state } = useTokenDetails();
  console.log(state, 'stat');
  return (
    <>
      <NextSeo
        title={t('tokenDetails')}
        openGraph={{
          title: t('tokenDetails'),
        }}
      />
      <Layout
        navTitle={t('tokenDetails')}
        className={classes.root}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <Profile className={classes.profile} profile={state.profile} />
          <Stats className={classes.stats} stats={state.stats} />
          <Overview className={classes.overview} overview={state.overview} />
          <Transactions className={classes.transaction} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TokenDetails;
