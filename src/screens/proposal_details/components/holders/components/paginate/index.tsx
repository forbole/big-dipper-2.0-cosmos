import React from 'react';
import { Pagination } from '@components';
import { useHoldersContext } from '../../contexts/holders';
import { useStyles } from './styles';

const Paginate = () => {
  const {
    total,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useHoldersContext();
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
