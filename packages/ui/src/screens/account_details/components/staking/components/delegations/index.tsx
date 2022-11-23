import React from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import { usePagination, useScreenSize } from '@/hooks';
import Pagination from '@/components/pagination';
import NoData from '@/components/no_data';
import Loading from '@/components/loading';
import { useProfilesRecoil } from '@/recoil/profiles';
import type { DelegationsType } from '@/screens/account_details/components/staking/types';
import { useStyles } from '@/screens/account_details/components/staking/components/delegations/styles';
import type DesktopType from '@/screens/account_details/components/staking/components/delegations/components/desktop';
import type MobileType from '@/screens/account_details/components/staking/components/delegations/components/mobile';

const Desktop = dynamic(
  () =>
    import('@/screens/account_details/components/staking/components/delegations/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () =>
    import('@/screens/account_details/components/staking/components/delegations/components/mobile')
) as typeof MobileType;

const Delegations: React.FC<
  {
    delegations: DelegationsType;
  } & ComponentDefault
> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({});

  const pageItems = R.pathOr([], ['delegations', 'data', page], props);

  const dataProfiles = useProfilesRecoil(pageItems.map((x: any) => x.validator));

  const mergedDataWithProfiles = pageItems.map((x, i) => ({
    ...(x as object),
    validator: dataProfiles[i],
  }));

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.delegations.loading) {
    component = <Loading />;
  } else if (!items.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={items as any} />;
  } else {
    component = <Mobile items={items as any} />;
  }

  return (
    <div className={classnames(props.className)}>
      {component}
      <Pagination
        className={classes.paginate}
        total={props.delegations.count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Delegations;
