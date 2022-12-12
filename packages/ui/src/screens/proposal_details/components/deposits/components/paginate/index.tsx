import Pagination from '@/components/pagination';
import { useStyles } from '@/screens/proposal_details/components/deposits/components/paginate/styles';
import { ComponentProps, FC } from 'react';

type Props = Pick<
  ComponentProps<typeof Pagination>,
  'total' | 'page' | 'rowsPerPage' | 'handlePageChange' | 'handleRowsPerPageChange'
>;

const Paginate: FC<Props> = ({
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
