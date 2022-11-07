import React from 'react';
import * as R from 'ramda';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { usePagination, useScreenSize } from '@hooks';
import Pagination from '@components/pagination';
import NoData from '@components/no_data';
import Loading from '@components/loading';
import { useProfilesRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import { UnbondingsType } from '../../types';
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
  const dataProfiles = useProfilesRecoil(pageItems.map((x) => x.validator));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return {
      ...x,
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
    component = <Desktop items={items} />;
  } else {
    component = <Mobile items={items} />;
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
