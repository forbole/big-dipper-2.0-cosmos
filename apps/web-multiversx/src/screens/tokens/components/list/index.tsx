import React from 'react';
import { usePagination } from '@/hooks/use_pagination';
import Pagination from '@/components/pagination';
import NoData from '@/components/no_data';
import Box from '@/components/box';
import Loading from '@/components/loading';
import useStyles from '@/screens/tokens/components/list/styles';
import { useBlocks, PAGE_SIZE } from '@/screens/tokens/components/list/hooks';
import TokenList from '@/screens/tokens/components/list/components/tokens_list';

const List = () => {
  const { classes } = useStyles();
  const { state, handlePageChangeCallback } = useBlocks();
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
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default List;
