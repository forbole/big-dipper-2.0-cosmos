/* eslint-disable object-curly-newline, react/require-default-props */
import { Box, LoadAndExist, NoData, Pagination } from '@components';
import { useProfilesRecoil } from '@recoil/profiles';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import React, { ComponentProps, useCallback, useMemo } from 'react';
import { useAccounts } from './hooks';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

type Props = {
  className?: string;
};

const List: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const { items, loading, exists, page, setPage, rowsPerPage, setRowsPerPage } = useAccounts();
  const addresses = useMemo(() => items?.map((x) => x.address ?? '') ?? [], [items]);
  const dataProfiles = useProfilesRecoil(addresses);
  const mergedDataWithProfiles = useMemo(
    () => items?.map((x, i) => ({
      ...x,
      Account: dataProfiles[i],
    })),
    [JSON.stringify(items), JSON.stringify(dataProfiles)],
  );
  const handleChangePage = useCallback<ComponentProps<typeof Pagination>['handleChangePage']>(
    (_, newPage) => setPage(newPage),
    [setPage],
  );

  const showData = !!items?.length;

  return (
    <LoadAndExist loading={loading} exists={exists}>
      <Box className={classnames(className, classes.root)}>
        {!showData && <NoData />}
        {showData && <Desktop className={classes.desktop} items={mergedDataWithProfiles} />}
        {showData && <Mobile className={classes.mobile} items={mergedDataWithProfiles} />}
        {showData && (
          <Pagination
            className={classes.paginate}
            total={(page + 2) * rowsPerPage}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={setRowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}
          />
        )}
      </Box>
    </LoadAndExist>
  );
};

export default List;
