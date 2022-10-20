import React from 'react';
import { usePagination } from '@hooks';
import {
  Pagination,
  NoData,
  Box,
  Loading,
} from '@components';
import { useStyles } from './styles';
import {
  useBlocks, PAGE_SIZE,
} from './hooks';
import { TokenList } from './components';

const List = () => {
  const classes = useStyles();
  const {
    state, handlePageChangeCallback,
  } = useBlocks();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({
    rowsPage: PAGE_SIZE,
    pageChangeCallback: handlePageChangeCallback,
  });

  let component = null;

  if (state.loading) {
    component = <Loading />;
  } else if (!state.items.length) {
    component = <NoData />;
  } else {
    component = <TokenList items={state.items} />;
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
