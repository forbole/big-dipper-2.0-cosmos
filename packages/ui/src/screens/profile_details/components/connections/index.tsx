import Box from '@/components/box';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import { useStyles } from '@/screens/profile_details/components/connections/styles';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import React from 'react';

const Desktop = dynamic(
  () => import('@/screens/profile_details/components/connections/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/profile_details/components/connections/components/mobile')
);

const Connections: React.FC<{
  data: ProfileConnectionType[];
}> = ({ data }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
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
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Connections;
