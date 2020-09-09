import React from 'react';
import classnames from 'classnames';
import {
  TransactionsList,
  Box,
  TransactionsFilter,
} from '@components';
import { useStyles } from './styles';
import {
  TransactionsProvider, useTransactionsContext,
} from './contexts/transactions';

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const callback = (value:string) => {
    console.log(`filted wtih ${value}`);
  };
  return (
    <TransactionsProvider>
      <Box className={classnames(className, classes.root)}>
        <TransactionsFilter callback={callback} className={classes.filter} />
        <TransactionsList useContext={useTransactionsContext} className={classes.list} />
      </Box>
    </TransactionsProvider>
  );
};

export default List;
