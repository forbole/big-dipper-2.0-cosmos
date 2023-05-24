import React from 'react';
import useAppTranslation from '@/hooks/useAppTranslation';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import useStyles from '@/screens/accounts/styles';
import List from '@/screens/accounts/components/list';

const Accounts = () => {
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
  return (
    <>
      <NextSeo
        title={t('accounts:topAccounts') ?? undefined}
        openGraph={{
          title: t('accounts:topAccounts') ?? undefined,
        }}
      />
      <Layout navTitle={t('accounts:topAccounts') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Accounts;
