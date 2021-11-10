import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import {
  Typography,
} from '@material-ui/core';
import {
  Pagination, Box,
} from '@components';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Connections: React.FC<{
  data: ProfileConnectionType[];
}> = ({
  data,
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});
  const items = sliceItems(data);
  return (
    <Box>
      <Typography variant="h2">
        {t('connectionsTitle')}
      </Typography>

      {isDesktop ? (
        <Desktop items={items} className={classes.noWrap} />
      ) : (
        <Mobile items={items} />
      )}
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
