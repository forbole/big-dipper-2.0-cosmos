import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  Pagination, NoData,
} from '@components';
import { useProfilesRecoil } from '@recoil/profiles';
import { useStyles } from './styles';
import { StakeType } from '../../../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Stake: React.FC<{
  className?: string;
  data: StakeType[];
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

  const dataProfiles = useProfilesRecoil(data.map((x) => x.account));
  const mergedDataWithProfiles = data.map((x, i) => {
    return ({
      ...x,
      account: dataProfiles[i],
    });
  });

  const items = sliceItems(mergedDataWithProfiles);

  return (
    <div className={classnames(className)}>
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

export default Stake;
