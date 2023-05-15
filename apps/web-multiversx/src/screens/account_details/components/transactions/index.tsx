import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Box from '@/components/box';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import TransactionsList from '@/components/transactions_list';
import { usePagination } from '@/hooks/use_pagination';
import {
  PAGE_SIZE,
  useTransactions,
} from '@/screens/account_details/components/transactions/hooks';
import useStyles from '@/screens/account_details/components/transactions/styles';

const Transactions: FC<ComponentDefault> = (props) => {
  const { t } = useAppTranslation('accounts');
  const { classes, cx } = useStyles();
  const { state, handlePageChangeCallback } = useTransactions();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({
    rowsPage: PAGE_SIZE,
    pageChangeCallback: handlePageChangeCallback,
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.items.length) {
    component = <NoData />;
  } else {
    component = <TransactionsList {...{ items: state.items }} />;
  }

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography variant="h2">{t('transactions')}</Typography>
      {component}
      <Pagination
        className={classes.paginate}
        total={state.total}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default Transactions;
