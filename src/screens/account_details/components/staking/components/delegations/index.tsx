import React from 'react';
import classnames from 'classnames';
import { usePagination } from '@hooks';
import { Pagination } from '@components';
import { useAccountContext } from '../../../../contexts/account';
import {
  Desktop, Mobile,
} from './components';
import { useStyles } from './styles';

const Delegations: React.FC<{
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
  // const { item } = useStakingContext();
  // const { delegations = [] } = item;
  // const items = sliceItems(delegations);

  return (
    <div className={classnames(className)}>
      <Mobile className={classes.mobile} items={uiData.staking.delegations} />
      <Desktop className={classes.desktop} items={uiData.staking.delegations} />
      <Pagination
        className={classes.paginate}
        total={uiData.staking.delegations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default Delegations;
