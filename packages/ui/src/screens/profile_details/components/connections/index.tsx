import Box from '@/components/box';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import type DesktopType from '@/screens/profile_details/components/connections/components/desktop';
import type MobileType from '@/screens/profile_details/components/connections/components/mobile';
import { useStyles } from '@/screens/profile_details/components/connections/styles';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import React from 'react';

const Desktop = dynamic(
  () => import('@/screens/profile_details/components/connections/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/profile_details/components/connections/components/mobile')
) as typeof MobileType;

const Connections: React.FC<{
  data: ProfileConnectionType[];
}> = ({ data }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, sliceItems } =
    usePagination({});
  const items = sliceItems(data);

  return (
    <Box>
      <Typography variant="h2">{t('connectionsTitle')}</Typography>

      {isDesktop ? <Desktop items={items} className={classes.noWrap} /> : <Mobile items={items} />}
      <Pagination
        className={classes.paginate}
        total={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Connections;
