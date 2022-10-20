import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import {
  Overview,
} from './components';
import { useBlockDetails } from './hooks';
import { useStyles } from './styles';

const BlockDetails = () => {
  const classes = useStyles();
  const { t } = useTranslation('nfts');
  const { state } = useBlockDetails();
  return (
    <>
      <NextSeo
        title={t('nftDetails')}
        openGraph={{
          title: t('nftDetails'),
        }}
      />
      <Layout
        navTitle={t('nftDetails')}
        className={classes.root}
      >
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <Overview {...state.overview} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default BlockDetails;
