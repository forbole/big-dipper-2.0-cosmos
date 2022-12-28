import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import { useStyles } from '@/screens/validator_details/components/staking/components/redelegations/styles';
import type { RedelegationsType } from '@/screens/validator_details/components/staking/types';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const Desktop = dynamic(
  () =>
    import(
      '@/screens/validator_details/components/staking/components/redelegations/components/desktop'
    )
);
const Mobile = dynamic(
  () =>
    import(
      '@/screens/validator_details/components/staking/components/redelegations/components/mobile'
    )
);

const Redelegations: FC<
  {
    redelegations: RedelegationsType;
  } & ComponentDefault
> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});

  const items = props?.redelegations?.data?.[page];

  let component = null;

  if (props.redelegations.loading && !items?.length) {
    component = <Loading />;
  } else if (!items?.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={items} />;
  } else {
    component = <Mobile items={items} />;
  }

  return (
    <div className={classnames(props.className)}>
      {component}
      <Pagination
        className={classes.paginate}
        total={props.redelegations.count}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default Redelegations;
