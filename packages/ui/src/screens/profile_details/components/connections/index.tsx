import Box from '@/components/box';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/profile_details/components/connections/components/desktop';
import Mobile from '@/screens/profile_details/components/connections/components/mobile';
import useStyles from '@/screens/profile_details/components/connections/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, useMemo } from 'react';

const Connections: FC<{ data: ProfileConnectionType[] }> = ({ data }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('accounts');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const dataMemo = useShallowMemo(data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  return (
    <Box>
      <Typography variant="h2">{t('connectionsTitle')}</Typography>
      <Desktop className={cx(display.hiddenUntilLg, classes.noWrap)} items={items} />
      <Mobile className={display.hiddenWhenLg} items={items} />
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
