import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Box from '@/components/box';
import TransactionsList from '@/components/transactions_list';
import TransactionsListDetails from '@/components/transactions_list_details';
import { readTx } from '@/recoil/settings';
import useStyles from '@/screens/block_details/components/transactions/styles';

type TransactionsProps = ComponentDefault & {
  transactions: Transactions[];
};

const Transactions: FC<TransactionsProps> = ({ className, transactions }) => {
  const txListFormat = useRecoilValue(readTx);
  const { t } = useAppTranslation('transactions');
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.root, className)}>
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
