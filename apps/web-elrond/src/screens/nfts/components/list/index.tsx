import React from 'react';
import { usePagination } from '@/hooks';
import Pagination from '@/components/pagination';
import NoData from '@/components/no_data';
import Box from '@/components/box';
import Loading from '@/components/loading';
import { useStyles } from '@/screens/nfts/components/list/styles';
import { useNFTs, PAGE_SIZE } from '@/screens/nfts/components/list/hooks';
import NftsList from '@/screens/nfts/components/list/components/nfts_list';

const List = () => {
  const classes = useStyles();
  const { state, handlePageChangeCallback } = useNFTs();
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
