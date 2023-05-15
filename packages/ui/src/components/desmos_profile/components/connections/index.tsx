import Desktop from '@/components/desmos_profile/components/connections/components/desktop';
import Mobile from '@/components/desmos_profile/components/connections/components/mobile';
import useStyles from '@/components/desmos_profile/components/connections/styles';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks/use_pagination';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, useMemo } from 'react';

type ConnectionsProps = {
  handleClose: () => void;
  open: boolean;
  data: ProfileConnectionType[];
};

const Connections: FC<ConnectionsProps> = ({ handleClose, open, data }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('accounts');
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const dataMemo = useShallowMemo(data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  return (
    <Dialog
      maxWidth="xl"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.dialog}
    >
      <DialogTitle className={classes.header}>
        <Typography variant="h2">{t('connectionsTitle')}</Typography>
        <IconButton aria-label="close" onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Desktop className={cx(classes.noWrap, display.hiddenUntilLg)} items={items} />
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
      </DialogContent>
    </Dialog>
  );
};

export default Connections;
