import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { usePagination } from '@hooks';
import Pagination from '@components/pagination';
import NoData from '@components/no_data';
import Box from '@components/box';
import Loading from '@components/loading';
import TransactionsList from '@components/transactions_list';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { useTransactions, PAGE_SIZE } from './hooks';

const Transactions: React.FC<{ provider: string } & ComponentDefault> = (props) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const { state, handlePageChangeCallback } = useTransactions(props.provider);
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({
    rowsPage: PAGE_SIZE,
    pageChangeCallback: handlePageChangeCallback,
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.items.length) {
    component = <NoData />;
  } else {
    component = <TransactionsList items={state.items} />;
  }

  return (
    <Box className={props.className}>
      <Typography variant="h2">{t('transactions')}</Typography>
      {component}
      <Pagination
        className={classes.paginate}
        total={state.total}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Transactions;
