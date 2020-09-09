import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { List } from './components';
import { useStyles } from './styles';

const Transactions = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  return (
    <Layout navTitle={t('transactions')} className={classes.root}>
      <List />
    </Layout>
  );
};

export default Transactions;
