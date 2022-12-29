import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useStyles } from '@/screens/validator_details/components/staking/components/unbondings/styles';
import type { UnbondingsType } from '@/screens/validator_details/components/staking/types';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import React, { FC, useCallback } from 'react';

const Desktop = dynamic(
  () =>
    import(
      '@/screens/validator_details/components/staking/components/unbondings/components/desktop'
    )
);
const Mobile = dynamic(
  () =>
    import('@/screens/validator_details/components/staking/components/unbondings/components/mobile')
);

type UnbondingsProps = {
  className?: string;
  unbondings: UnbondingsType;
  setPage: (page: number) => void;
};

const Unbondings: FC<UnbondingsProps> = (props) => {
  const classes = useStyles();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});
  const { isDesktop } = useScreenSize();
  const handlePageChangeCallback = useCallback(
    (event: Parameters<typeof handlePageChange>[0], newPage: number) => {
      props.setPage?.(newPage);
      handlePageChange?.(event, newPage);
    },
    [handlePageChange, props]
  );

  const itemsMemo = useShallowMemo(props?.unbondings?.data);

  let component = null;

  if (props.unbondings.error) {
    component = <pre>{props.unbondings.error.message}</pre>;
  } else if (props.unbondings.loading && !itemsMemo?.length) {
    component = <Loading />;
  } else if (!itemsMemo?.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={itemsMemo} />;
  } else {
    component = <Mobile items={itemsMemo} />;
  }

  let total = props.unbondings.count;
  if (total === undefined && props.unbondings.data?.length !== undefined) {
    if (props.unbondings.data.length === rowsPerPage) {
      total = page * rowsPerPage + props.unbondings.data.length + 1;
    } else {
      total = page * rowsPerPage + props.unbondings.data.length;
    }
  }

  return (
    <div className={classnames(props.className)}>
      {component}
      <Pagination
        className={classes.paginate}
        total={total}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChangeCallback}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </div>
  );
};

export default Unbondings;
