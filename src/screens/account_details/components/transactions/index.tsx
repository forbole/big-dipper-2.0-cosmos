import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionsListOld,
  Box,
} from '@components';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

const Transactions: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const useTransactionUtils = useTransactions();

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('transactions')}
      </Typography>
      <div className={classes.list}>
        <TransactionsListOld {...useTransactionUtils} />
      </div>
    </Box>
  );
};

export default Transactions;
