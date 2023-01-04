import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import List from './components/list';

const Accounts = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title={t('topAccounts')}
        openGraph={{
          title: t('topAccounts'),
        }}
      />
      <Layout
        navTitle={t('topAccounts')}
        className={classes.root}
      >
        <List />
      </Layout>
    </>
  );
};

export default Accounts;
