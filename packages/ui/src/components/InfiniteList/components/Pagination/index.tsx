import PaginationActions from '@/components/InfiniteList/components/PaginationActions';
import useStyles from '@/components/InfiniteList/styles';
import { PaginationProps, UNKNOWN_ITEM_COUNT } from '@/components/InfiniteList/types';
import TablePagination, { LabelDisplayedRowsArgs } from '@mui/material/TablePagination';
import { FC, MouseEvent } from 'react';

const Pagination: FC<PaginationProps> = ({
  itemsPerPage,
  itemCount,
  maxFetched,
  page,
  onPageChange,
}) => {
  const { classes } = useStyles();
  const labelDisplayedRows = ({ from, to }: LabelDisplayedRowsArgs) => {
    const maxPage = maxFetched !== undefined ? Math.max(to, maxFetched) : to;
    const total = itemCount === UNKNOWN_ITEM_COUNT ? `${maxPage}+,` : itemCount;
    return `${from}-${to} of ${total}`;
  };
  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onPageChange(newPage);
  };
  return (
    <TablePagination
      className={classes.pagination}
      component="div"
      rowsPerPageOptions={[itemsPerPage]}
      count={itemCount}
      labelDisplayedRows={labelDisplayedRows}
      rowsPerPage={itemsPerPage}
      page={Math.min(page, Math.floor((itemCount - 1) / itemsPerPage))}
      onPageChange={handleChangePage}
      ActionsComponent={PaginationActions}
    />
  );
};

export default Pagination;
