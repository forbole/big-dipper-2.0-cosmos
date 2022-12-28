import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import { useProfilesRecoil } from '@/recoil/profiles';
import { useStyles } from '@/screens/account_details/components/staking/components/redelegations/styles';
import type { RedelegationsType } from '@/screens/account_details/components/staking/types';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import * as R from 'ramda';
import React from 'react';

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

const Redelegations: React.FC<
  {
    redelegations: RedelegationsType;
  } & ComponentDefault
> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});

  const pageItems = R.pathOr<NonNullable<typeof props['redelegations']['data'][number]>>(
    [],
    ['redelegations', 'data', page],
    props
  );

  const fromProfiles = useProfilesRecoil(pageItems.map((x) => x.from));
  const toProfiles = useProfilesRecoil(pageItems.map((x) => x.to));
  const mergedDataWithProfiles = pageItems.map((x, i) => ({
    ...x,
    from: fromProfiles[i],
    to: toProfiles[i],
  }));

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.redelegations.loading && !items.length) {
    component = <Loading />;
  } else if (!items.length) {
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
