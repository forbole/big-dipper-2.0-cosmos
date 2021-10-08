import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionsList,
  Box,
} from '@components';
import { useStyles } from './styles';

const Transactions: React.FC<ComponentDefault & {
  transactions: Transactions[];
}> = ({
  className, transactions,
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h2">{t('transactions')}</Typography>
      </div>
      <TransactionsList
        transactions={transactions}
        itemCount={transactions.length}
        className={classes.list}
        hasNextPage={false}
        isNextPageLoading={false}
        loadNextPage={() => null}
        loadMoreItems={() => null}
        isItemLoaded={() => true}
      />
    </Box>

  );
};

export default Transactions;
