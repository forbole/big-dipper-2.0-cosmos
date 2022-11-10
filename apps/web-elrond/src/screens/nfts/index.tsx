import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from 'ui/components/layout';
import { List } from './components';
import { useStyles } from './styles';

const Blocks = () => {
  const classes = useStyles();
  const { t } = useTranslation('nfts');

  return (
    <>
      <NextSeo
        title={t('nfts')}
        openGraph={{
          title: t('nfts'),
        }}
      />
      <Layout navTitle={t('nfts')} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Blocks;
