import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/layout';
import { List } from './components';
import { useStyles } from './styles';

const Transactions = () => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  return (
    <>
      <NextSeo
        title={t('transactions')}
        openGraph={{
          title: t('transactions'),
        }}
      />
      <Layout navTitle={t('transactions')} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Transactions;
