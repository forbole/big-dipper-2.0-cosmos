import React from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  Pagination, NoData,
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

  return (
    <div className={classnames(props.className)}>
      {items.length ? (
        <>
          {isDesktop ? (
            <Desktop className={classes.desktop} items={items} />
          ) : (
            <Mobile className={classes.mobile} items={items} />
          )}
        </>
      ) : (
        <NoData />
      )}
      <Pagination
        className={classes.paginate}
        total={props.delegations.count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[]}
      />
    </div>
  );
};

export default Delegations;
