import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { useTokenDetails } from './hooks';
import {
  Overview,
  Market,
  Transactions,
  Holders,
} from './components';

const TokenDetails = () => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const { token } = useTokenDetails();
  return (
    <Layout navTitle={t('tokenDetails', { token })} className={classes.root}>
      <Overview className={classes.overview} />
      <Market className={classes.market} />
      <Holders className={classes.holders} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default TokenDetails;
