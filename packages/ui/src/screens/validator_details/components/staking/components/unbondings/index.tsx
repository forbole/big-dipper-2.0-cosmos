import React from 'react';
import * as R from 'ramda';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { usePagination, useScreenSize } from '@/hooks';
import Pagination from '@/components/pagination';
import NoData from '@/components/no_data';
import Loading from '@/components/loading';
import { useProfilesRecoil } from '@/recoil/profiles';
import type { UnbondingsType } from '@/screens/validator_details/components/staking/types';
import { useStyles } from '@/screens/validator_details/components/staking/components/unbondings/styles';
import type DesktopType from '@/screens/validator_details/components/staking/components/unbondings/components/desktop';
import type MobileType from '@/screens/validator_details/components/staking/components/unbondings/components/mobile';

const Desktop = dynamic(
  () =>
    import(
      '@/screens/validator_details/components/staking/components/unbondings/components/desktop'
    )
) as typeof DesktopType;
const Mobile = dynamic(
  () =>
    import('@/screens/validator_details/components/staking/components/unbondings/components/mobile')
) as typeof MobileType;

const Unbondings: React.FC<
  {
    unbondings: UnbondingsType;
  } & ComponentDefault
> = (props) => {
  const classes = useStyles();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({});
  const { isDesktop } = useScreenSize();

  const pageItems = R.pathOr([], ['unbondings', 'data', page], props);
  const dataProfiles = useProfilesRecoil(pageItems.map((x: any) => x.address));
  const mergedDataWithProfiles = pageItems.map((x, i) => ({
    ...(x as object),
    address: dataProfiles[i],
  }));

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.unbondings.loading) {
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
        total={props.unbondings.count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Unbondings;
