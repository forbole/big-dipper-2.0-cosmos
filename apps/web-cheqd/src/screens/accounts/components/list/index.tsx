/* eslint-disable object-curly-newline, react/require-default-props */
import LoadAndExist from '@/components/load_and_exist';
import Box from '@/components/box';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { useProfilesRecoil } from '@/recoil/profiles/hooks';
import dynamic from 'next/dynamic';
import React, { ComponentProps, useCallback, useMemo } from 'react';
import useStyles from '@/screens/accounts/components/list/styles';
import { useAccounts } from '@/screens/accounts/components/list/hooks';
import { useTranslation } from 'react-i18next';

const Desktop = dynamic(() => import('@/screens/accounts/components/list/components/desktop'));
const Mobile = dynamic(() => import('@/screens/accounts/components/list/components/mobile'));

type Props = {
  className?: string;
};

const List: React.FC<Props> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('accounts');
  const { items, loading, exists, page, setPage, rowsPerPage, setRowsPerPage } = useAccounts();
  const addresses = useMemo(() => items?.map((x) => x.address ?? '') ?? [], [items]);
  const dataProfiles = useProfilesRecoil(addresses).profiles;
  const mergedDataWithProfiles = useMemo(
    () =>
      items?.map((x, i) => ({
        ...x,
        Account: dataProfiles[i],
      })),
    [dataProfiles, items]
  );
  const handleChangePage = useCallback<ComponentProps<typeof Pagination>['handlePageChange']>(
    (_, newPage) => setPage(newPage),
    [setPage]
  );

  const showData = !!items?.length;

  return (
    <LoadAndExist loading={loading} exists={exists}>
      <Box className={cx(className, classes.root)}>
        <div className={classes.refreshDelayNotice}>{t('accounts:refresh_delay_notice')}</div>
        {!showData && <NoData />}
        {showData && <Desktop className={classes.desktop} items={mergedDataWithProfiles} />}
        {showData && <Mobile className={classes.mobile} items={mergedDataWithProfiles} />}
        {showData && (
          <Pagination
            className={classes.paginate}
            total={(page + 2) * rowsPerPage}
            rowsPerPage={rowsPerPage}
            page={page}
            handlePageChange={handleChangePage}
            handleRowsPerPageChange={setRowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}
          />
        )}
      </Box>
    </LoadAndExist>
  );
};

export default List;
