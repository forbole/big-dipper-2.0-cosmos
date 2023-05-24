import React from 'react';
import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';
import Layout from '@/components/layout';
import List from '@/screens/transactions/components/list';
import useStyles from '@/screens/transactions/styles';

const Transactions = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('transactions');

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
