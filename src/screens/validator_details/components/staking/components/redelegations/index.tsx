import React from 'react';
import classnames from 'classnames';
import { usePagination } from '@hooks';
import { Pagination } from '@components';
import {
  Desktop, Mobile,
} from './components';
import { useStyles } from './styles';
import { useAccountContext } from '../../../../contexts/account';

const Redelegations: React.FC<{
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
  const { uiData } = useAccountContext();
  const items = sliceItems(uiData.staking.redelegations);
  return (
    <div className={classnames(className)}>
      <Mobile className={classes.mobile} items={items} />
      <Desktop className={classes.desktop} items={items} />
      <Pagination
        className={classes.paginate}
        total={uiData.staking.redelegations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default Redelegations;
