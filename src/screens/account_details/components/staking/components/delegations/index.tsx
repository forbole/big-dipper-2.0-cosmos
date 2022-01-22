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
  handleDelegationPageCallback: (page: number, _rowsPerPage: number) => void;
} & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({
    pageChangeCallback: props.handleDelegationPageCallback,
  });

  const pageItems = R.pathOr([], ['delegations', 'data', page], props);

  const dataProfiles = useProfilesRecoil(pageItems.map((x) => x.validator));

  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return ({
      ...x,
      validator: dataProfiles[i],
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
        // rowsPerPageOptions={[]}
      />
    </div>
  );
};

export default Delegations;
