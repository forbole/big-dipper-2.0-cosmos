import React from 'react';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import {
  usePagination, useScreenSize,
} from '@hooks';
import {
  NoData, Pagination,
} from '@components';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import { RedelegationType } from '../../../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Redelegations: React.FC<{
  className?: string;
  data: RedelegationType[];
  count: number;
}> = ({
  className,
  data,
  count,
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});
  const fromProfiles = useProfilesRecoil(data.map((x) => x.from));
  const toProfiles = useProfilesRecoil(data.map((x) => x.to));
  const mergedDataWithProfiles = data.map((x, i) => {
    return ({
      ...x,
      from: fromProfiles[i],
      to: toProfiles[i],
    });
  });
  const items = sliceItems(mergedDataWithProfiles);

  return (
    <div className={classnames(className)}>
      {items.length ? (
        <>
          {isDesktop ? (
            <Desktop
              className={classes.desktop}
              items={items}
            />
          ) : (
            <Mobile className={classes.mobile} items={items} />
          )}
        </>
      ) : (
        <NoData />
      )}
      <Pagination
        className={classes.paginate}
        total={count}
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
