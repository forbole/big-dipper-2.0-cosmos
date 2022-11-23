import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { useStyles } from '@/screens/validators/styles';
import List from '@/screens/validators/components/list';

const Validators = () => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title={t('validators')}
        openGraph={{
          title: t('validators'),
        }}
      />
      <Layout navTitle={t('validators')} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Validators;
