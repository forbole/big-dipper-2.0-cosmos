import React from 'react';
import { usePagination } from '@hooks';
import Pagination from '@components/pagination';
import NoData from '@components/no_data';
import Box from 'ui/components/box';
import Loading from 'ui/components/loading';
import TransactionsList from 'ui/components/transactions_list';
import { useStyles } from './styles';
import { useBlocks, PAGE_SIZE } from './hooks';

const List = () => {
  const classes = useStyles();
  const { state, handlePageChangeCallback } = useBlocks();
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
    <Box>
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

export default List;
