import React from 'react';
import Pagination from '@/components/pagination';
import { useStyles } from '@/screens/proposal_details/components/votes/components/paginate/styles';

const Paginate = ({ total, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }: any) => {
  const classes = useStyles();
  return (
    <Pagination
      className={classes.root}
      total={total}
      rowsPerPage={rowsPerPage}
      page={page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      rowsPerPageOptions={[10, 25, 50, 100]}
    />
  );
};

export default Paginate;
