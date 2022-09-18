import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  Box,
} from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  Memory,
  Compute,
  Storage,
  Providers,
} from './components';
import { useProviders } from './hooks';

const Providers = () => {
  const { t } = useTranslation('providers');
  const classes = useStyles();
  const { state } = useProviders();
  console.log('state => ', state);

  return (
    <>
      <NextSeo
        title={t('providers')}
        openGraph={{
          title: t('providers'),
        }}
      />
      <Layout
        navTitle={t('providers')}
        className={classes.root}
      >
        <DataBlocks />
        <Memory className={classes.memory} />
        <Compute className={classes.compute} />
        <Storage className={classes.storage} />
        <Providers className={classes.providers} />
      </Layout>
    </>
  );
};

export default Providers;
