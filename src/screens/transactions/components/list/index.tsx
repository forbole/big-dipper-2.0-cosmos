import React from 'react';
import classnames from 'classnames';
import {
  TransactionsListOld,
  Box,
} from '@components';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const useTransactionUtils = useTransactions();

  return (
    <Box className={classnames(className, classes.root)}>
      <TransactionsListOld {...useTransactionUtils} />
    </Box>
  );
};

export default List;
