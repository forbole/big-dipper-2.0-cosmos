import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Balance,
  Staking,
  Transactions,
} from './components';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  return (
    <Layout navTitle={t('accountDetails')} className={classes.root}>
      <Balance className={classes.balance} />
      <Overview className={classes.overview} />
      <Staking className={classes.staking} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default AccountDetails;
