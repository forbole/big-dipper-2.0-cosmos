import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { usePagination } from '@hooks';
import Pagination from 'ui/components/pagination';
import NoData from 'ui/components/no_data';
import Box from 'ui/components/box';
import Loading from 'ui/components/loading';
import TransactionsList from 'ui/components/transactions_list';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { useTransactions, PAGE_SIZE } from './hooks';

const Transactions: React.FC<ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const { state, handlePageChangeCallback } = useTransactions();
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
    <Box className={classnames(props.className, classes.root)}>
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
