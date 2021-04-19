import React from 'react';
import classnames from 'classnames';
import { usePagination } from '@hooks';
import {
  NoData, Pagination,
} from '@components';
// import { useStakingContext } from '../../contexts/staking';
import {
  Desktop, Mobile,
} from './components';
import { useStyles } from './styles';

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

  // const { item } = useStakingContext();
  // const { redelegations = [] } = item;
  const redelegations = [];
  const items = sliceItems(redelegations);

  return (
    <div className={classnames(className)}>
      {items.length ? (
        <>
          <Mobile className={classes.mobile} items={items} />
          <Desktop className={classes.desktop} items={items} />
        </>
      ) : (
        <NoData />
      )}
      <Pagination
        className={classes.paginate}
        total={redelegations.length}
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
