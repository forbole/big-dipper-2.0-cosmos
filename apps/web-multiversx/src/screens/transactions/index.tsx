import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslationByApp from '@/hooks/useTranslationByApp';
import Layout from '@/components/layout';
import List from '@/screens/transactions/components/list';
import useStyles from '@/screens/transactions/styles';

const Transactions = () => {
  const { classes } = useStyles();
  const { t } = useTranslationByApp('transactions');

  return (
    <>
      <NextSeo
        title={t('transactions') ?? undefined}
        openGraph={{
          title: t('transactions') ?? undefined,
        }}
      />
      <Layout navTitle={t('transactions') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Transactions;
