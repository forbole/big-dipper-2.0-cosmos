import React from 'react';
import classnames from 'classnames';
import { usePagination } from '@hooks';
import { Pagination } from '@components';
import { useStakingContext } from '../../contexts/staking';
import {
  Desktop, Mobile,
} from './components';
import { useStyles } from './styles';

const Unbondings: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});

  const { item } = useStakingContext();
  const { unbondings = [] } = item;
  const items = sliceItems(unbondings);
  return (
    <div className={classnames(className)}>
      <Mobile className={classes.mobile} items={items} />
      <Desktop className={classes.desktop} items={items} />
      <Pagination
        className={classes.paginate}
        total={unbondings.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default Unbondings;
