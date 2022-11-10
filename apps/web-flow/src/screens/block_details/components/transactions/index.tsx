import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
// import TransactionsList from 'ui/components/transactions_list';
// import TransactionsListDetails from 'ui/components/transactions_list_details';
import Box from 'ui/components/box';
// import { useRecoilValue } from 'recoil';
// import { readTx } from '@recoil/settings';
import { useStyles } from './styles';

const Transactions: React.FC<
  ComponentDefault & {
    transactions: Transactions[];
  }
> = ({ className }) => {
  // const txListFormat = useRecoilValue(readTx);
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h2">{t('transactions')}</Typography>
      </div>
      {/* {txListFormat === 'compact' ? (
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
      ) : (
        <TransactionsListDetails
          transactions={transactions}
          itemCount={transactions.length}
          className={classes.list}
          hasNextPage={false}
          isNextPageLoading={false}
          loadNextPage={() => null}
          loadMoreItems={() => null}
          isItemLoaded={() => true}
        />
      )} */}
    </Box>
  );
};

export default Transactions;
