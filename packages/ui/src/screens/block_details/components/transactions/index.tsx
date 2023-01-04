import Box from '@/components/box';
import TransactionsList from '@/components/transactions_list';
import TransactionsListDetails from '@/components/transactions_list_details';
import { readTx } from '@/recoil/settings';
import { useStyles } from '@/screens/block_details/components/transactions/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type TransactionsProps = ComponentDefault & {
  transactions: Transactions[];
};

const Transactions: FC<TransactionsProps> = ({ className, transactions }) => {
  const txListFormat = useRecoilValue(readTx);
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h2">{t('transactions')}</Typography>
      </div>
      {txListFormat === 'compact' ? (
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
      )}
    </Box>
  );
};

export default Transactions;
