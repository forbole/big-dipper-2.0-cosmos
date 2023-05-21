import React from 'react';
import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import List from '@/screens/nfts/components/list';
import useStyles from '@/screens/nfts/styles';

const Blocks = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('nfts');

  return (
    <>
      <NextSeo
        title={t('nfts') ?? undefined}
        openGraph={{
          title: t('nfts') ?? undefined,
        }}
      />
      <Layout navTitle={t('nfts') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Blocks;
