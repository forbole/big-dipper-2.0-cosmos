import React from 'react';
import * as R from 'ramda';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { usePagination, useScreenSize } from '@hooks';
import NoData from '@components/no_data';
import Pagination from '@components/pagination';
import Loading from '@components/loading';
import { useProfilesRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import { RedelegationsType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Redelegations: React.FC<
  {
    redelegations: RedelegationsType;
  } & ComponentDefault
> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination({});

  const pageItems = R.pathOr([], ['redelegations', 'data', page], props);

  const fromProfiles = useProfilesRecoil(pageItems.map((x) => x.from));
  const toProfiles = useProfilesRecoil(pageItems.map((x) => x.to));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return {
      ...x,
      from: fromProfiles[i],
      to: toProfiles[i],
    };
  });

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.redelegations.loading) {
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
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default Redelegations;
