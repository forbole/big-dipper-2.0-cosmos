import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { useStyles } from '@/screens/providers/styles';
import DataBlocks from '@/screens/providers/components/data_blocks';
import Memory from '@/screens/providers/components/memory';
import Compute from '@/screens/providers/components/compute';
import Storage from '@/screens/providers/components/storage';
import ProvidersList from '@/screens/providers/components/providers_list';
import { useProviders } from '@/screens/providers/hooks';

const Providers = () => {
  const { t } = useTranslation('providers');
  const classes = useStyles();
  const { state, handleSearch } = useProviders();

  return (
    <>
      <NextSeo
        title={t('providers')}
        openGraph={{
          title: t('providers'),
        }}
      />
      <Layout navTitle={t('providers')} className={classes.root}>
        <DataBlocks
          className={classes.dataBlocks}
          providers={state.activeProvidersCount}
          leases={state.activeLeasesCount}
        />
        <Memory className={classes.memory} memory={state.memory} />
        <Compute className={classes.compute} compute={state.cpu} />
        <Storage className={classes.storage} storage={state.storage} />
        <ProvidersList
          className={classes.providersList}
          list={state.providers}
          handleSearch={handleSearch}
        />
      </Layout>
    </>
  );
};

export default Providers;
