import React from 'react';
import useTranslationByApp from '@/hooks/useTranslationByApp';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import List from '@/screens/validators/components/list';
import useStyles from '@/screens/validators/styles';

const Validators = () => {
  const { t } = useTranslationByApp('validators');
  const { classes } = useStyles();
  return (
    <>
      <NextSeo
        title={t('validators') ?? undefined}
        openGraph={{
          title: t('validators') ?? undefined,
        }}
      />
      <Layout navTitle={t('validators') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Validators;
