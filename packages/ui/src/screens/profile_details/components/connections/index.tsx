import Box from '@/components/box';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/profile_details/components/connections/components/desktop';
import Mobile from '@/screens/profile_details/components/connections/components/mobile';
import useStyles from '@/screens/profile_details/components/connections/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC, useMemo } from 'react';

const Connections: FC<{ data: ProfileConnectionType[] }> = ({ data }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('accounts');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const dataMemo = useShallowMemo(data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  return (
    <Box>
      <Typography variant="h2">{t('connectionsTitle')}</Typography>
      <Desktop className={cx(classes.hiddenUntilLg, classes.noWrap)} items={items} />
      <Mobile className={classes.hiddenWhenLg} items={items} />
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
