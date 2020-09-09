import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionsList,
  Box,
  TransactionsFilter,
} from '@components';
import { useStyles } from './styles';
import {
  TransactionsProvider, useTransactionsContext,
} from './contexts/transactions';

const Transactions: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const callback = (value:string) => {
    console.log(`filted wtih ${value}`);
  };
  return (
    <TransactionsProvider>
      <Box className={classnames(className, classes.root)}>
        <div className={classes.header}>
          <Typography variant="h2">{t('transactions')}</Typography>
          <TransactionsFilter callback={callback} className={classes.filter} />
        </div>
        <TransactionsList useContext={useTransactionsContext} className={classes.list} />
      </Box>
    </TransactionsProvider>
  );
};

export default Transactions;
