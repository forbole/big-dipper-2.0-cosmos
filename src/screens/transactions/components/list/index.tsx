import React from 'react';
import classnames from 'classnames';
import {
  TransactionsList,
  Box,
} from '@components';
import { useStyles } from './styles';
import {
  TransactionsProvider, useTransactionsContext,
} from './contexts/transactions';

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return (
    <TransactionsProvider>
      <Box className={classnames(className, classes.root)}>
        <TransactionsList useContext={useTransactionsContext} className={classes.list} />
      </Box>
    </TransactionsProvider>
  );
};

export default List;
