import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { Typography } from '@material-ui/core';
import Pagination from '@components/pagination';
import Box from '@components/box';
import { usePagination, useScreenSize } from '@hooks';
import { useStyles } from './styles';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

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
