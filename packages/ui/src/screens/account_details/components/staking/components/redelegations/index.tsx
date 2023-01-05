import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import useStyles from '@/screens/account_details/components/staking/components/redelegations/styles';
import type { RedelegationsType } from '@/screens/account_details/components/staking/types';
import dynamic from 'next/dynamic';
import React, { FC, useCallback } from 'react';

const Desktop = dynamic(
  () =>
    import(
      '@/screens/account_details/components/staking/components/redelegations/components/desktop'
    )
);
const Mobile = dynamic(
  () =>
    import(
      '@/screens/account_details/components/staking/components/redelegations/components/mobile'
    )
);

type RedelegationsProps = {
  className?: string;
  redelegations: RedelegationsType;
  setPage: (page: number) => void;
};

const Redelegations: FC<RedelegationsProps> = (props) => {
  const { isDesktop } = useScreenSize();
  const { classes } = useStyles();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});
  const handlePageChangeCallback = useCallback(
    (event: Parameters<typeof handlePageChange>[0], newPage: number) => {
      props.setPage?.(newPage);
      handlePageChange?.(event, newPage);
    },
    [handlePageChange, props]
  );
  const itemsMemo = useShallowMemo(props?.redelegations?.data);

  let component = null;

  if (props.redelegations.error) {
    component = <pre>{props.redelegations.error.message}</pre>;
  } else if (props.redelegations.loading && !itemsMemo?.length) {
    component = <Loading />;
  } else if (!itemsMemo?.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={itemsMemo} />;
  } else {
    component = <Mobile items={itemsMemo} />;
  }

  let total = props.redelegations.count;
  if (total === undefined && props.redelegations.data?.length !== undefined) {
    if (props.redelegations.data.length === rowsPerPage) {
      total = page * rowsPerPage + props.redelegations.data.length + 1;
    } else {
      total = page * rowsPerPage + props.redelegations.data.length;
    }
  }

  return (
    <div className={props.className}>
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

export default Redelegations;
