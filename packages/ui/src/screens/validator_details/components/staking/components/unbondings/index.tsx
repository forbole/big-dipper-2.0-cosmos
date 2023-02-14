import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/validator_details/components/staking/components/unbondings/components/desktop';
import Mobile from '@/screens/validator_details/components/staking/components/unbondings/components/mobile';
import useStyles from '@/screens/validator_details/components/staking/components/unbondings/styles';
import type { UnbondingsType } from '@/screens/validator_details/components/staking/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC, useCallback } from 'react';

type UnbondingsProps = {
  className?: string;
  unbondings: UnbondingsType;
  setPage: (page: number) => void;
};

const Unbondings: FC<UnbondingsProps> = (props) => {
  const { classes } = useStyles();
  const display = useDisplayStyles().classes;
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});
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
  } else {
    component = (
      <>
        <Desktop items={itemsMemo} className={display.hiddenUntilLg} />
        <Mobile items={itemsMemo} className={display.hiddenWhenLg} />
      </>
    );
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

export default Unbondings;
