import React from 'react';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import useStyles from '@/screens/accounts/styles';
import List from '@/screens/accounts/components/list';

const Accounts = () => {
  const { t } = useTranslation('accounts');
  const { classes } = useStyles();
  return (
    <>
      <NextSeo
        title={t('topAccounts') ?? undefined}
        openGraph={{
          title: t('topAccounts') ?? undefined,
        }}
      />
      <Layout navTitle={t('topAccounts') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Accounts;
