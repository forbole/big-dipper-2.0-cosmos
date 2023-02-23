import BlocksList from '@/components/blocks_list';
import Box from '@/components/box';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import { PAGE_SIZE, useBlocks } from '@/screens/blocks/components/list/hooks';
import useStyles from '@/screens/blocks/components/list/styles';

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
    component = <BlocksList items={state.items} />;
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
