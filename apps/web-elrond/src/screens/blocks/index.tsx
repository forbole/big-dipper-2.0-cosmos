import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/layout';
import List from '@/screens/blocks/components/list';
import { useStyles } from '@/screens/blocks/styles';

const Blocks = () => {
  const classes = useStyles();
  const { t } = useTranslation('blocks');

  return (
    <>
      <NextSeo
        title={t('blocks')}
        openGraph={{
          title: t('blocks'),
        }}
      />
      <Layout navTitle={t('blocks')} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Blocks;
