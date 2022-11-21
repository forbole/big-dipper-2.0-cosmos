import NoData from '@components/no_data';
import Pagination from '@components/pagination';
import TransactionsList from '@components/transactions_list';
import React from 'react';
import Box from 'ui/components/box';
import Loading from 'ui/components/loading';
import { usePagination } from 'ui/hooks';
import { PAGE_SIZE, useBlocks } from './hooks';
import { useStyles } from './styles';

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
    component = <TransactionsList {...({ items: state.items } as any)} />;
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
