import React from 'react';
import * as R from 'ramda';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { usePagination, useScreenSize } from '@hooks';
import NoData from '@components/no_data';
import Pagination from '@components/pagination';
import Loading from '@components/loading';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import type { RedelegationsType } from '../../types';
import { useStyles } from './styles';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Redelegations: React.FC<
  {
    redelegations: RedelegationsType;
  } & ComponentDefault
> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({});

  const pageItems = R.pathOr([], ['redelegations', 'data', page], props);

  const fromProfiles = useProfilesRecoil(pageItems.map((x: any) => x.from));
  const toProfiles = useProfilesRecoil(pageItems.map((x: any) => x.to));
  const mergedDataWithProfiles = pageItems.map((x, i) => ({
    ...(x as object),
    from: fromProfiles[i],
    to: toProfiles[i],
  }));

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.redelegations.loading) {
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
        total={props.redelegations.count}
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
