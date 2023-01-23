import useStyles from '@/components/InfiniteList/styles';
import { UNKNOWN_ITEM_COUNT } from '@/components/InfiniteList/types';
import Pagination from '@mui/material/Pagination';
import { ChangeEvent, MouseEvent } from 'react';

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;
  const itemCount = count !== UNKNOWN_ITEM_COUNT ? count : (page + 10) * rowsPerPage;
  const { classes } = useStyles();

  const handlePageChange = (_: ChangeEvent<unknown>, newPage: number) => {
    if (newPage <= 1) {
      onPageChange(null, 0);
    } else {
      onPageChange(null, newPage - 1);
    }
  };

  const showLastButton = count !== UNKNOWN_ITEM_COUNT;
  return (
    <Pagination
      className={classes.paginationActions}
      count={Math.ceil(itemCount / rowsPerPage)}
      page={page + 1}
      siblingCount={2}
      boundaryCount={1}
      onChange={handlePageChange}
      showFirstButton
      showLastButton={showLastButton}
    />
  );
}

export default TablePaginationActions;
