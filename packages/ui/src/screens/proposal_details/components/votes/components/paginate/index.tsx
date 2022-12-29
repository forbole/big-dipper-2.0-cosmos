import Pagination from '@/components/pagination';
import { useStyles } from '@/screens/proposal_details/components/votes/components/paginate/styles';
import { ComponentProps, FC } from 'react';

type Properties = 'total' | 'page' | 'rowsPerPage' | 'handlePageChange' | 'handleRowsPerPageChange';
type PaginateProps = Pick<ComponentProps<typeof Pagination>, Properties>;

const Paginate: FC<PaginateProps> = ({
  total,
  page,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
}) => {
  const classes = useStyles();
  return (
    <Pagination
      className={classes.root}
      total={total}
      rowsPerPage={rowsPerPage}
      page={page}
      handlePageChange={handlePageChange}
      handleRowsPerPageChange={handleRowsPerPageChange}
      rowsPerPageOptions={[10, 25, 50, 100]}
    />
  );
};

export default Paginate;
