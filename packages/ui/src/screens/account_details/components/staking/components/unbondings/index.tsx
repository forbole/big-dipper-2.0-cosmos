import React from 'react';
import * as R from 'ramda';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { usePagination, useScreenSize } from 'ui/hooks';
import Pagination from 'ui/components/pagination';
import NoData from 'ui/components/no_data';
import Loading from 'ui/components/loading';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import { useStyles } from './styles';
import type { UnbondingsType } from '../../types';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Unbondings: React.FC<
  {
    unbondings: UnbondingsType;
  } & ComponentDefault
> = (props) => {
  const classes = useStyles();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({});
  const { isDesktop } = useScreenSize();

  const pageItems = R.pathOr([], ['unbondings', 'data', page], props);
  const dataProfiles = useProfilesRecoil(pageItems.map((x: any) => x.validator));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return {
      ...(x as object),
      validator: dataProfiles[i],
    };
  });

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
