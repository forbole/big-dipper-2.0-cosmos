import React from 'react';
import {
  usePagination,
} from '@hooks';
import {
  Pagination,
  NoData,
  Box,
  Loading,
} from '@components';
import { useStyles } from './styles';
import {
  useNFTs, PAGE_SIZE,
} from './hooks';
import { NftsList } from './components';

const List = () => {
  const classes = useStyles();
  const {
    state, handlePageChangeCallback,
  } = useNFTs();
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
    component = <NftsList items={state.items} />;
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
