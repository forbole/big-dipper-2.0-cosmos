import React from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  Pagination,
  NoData,
  Loading,
} from '@components';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import { DelegationsType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Delegations: React.FC<{
  delegations: DelegationsType,
} & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({});

  const pageItems = R.pathOr([], ['delegations', 'data', page], props);

  const dataProfiles = useProfilesRecoil(pageItems.map((x) => x.address));

  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return ({
      ...x,
      address: dataProfiles[i],
    });
  });

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.delegations.loading) {
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
