import Desktop from '@/components/desmos_profile/components/connections/components/desktop';
import Mobile from '@/components/desmos_profile/components/connections/components/mobile';
import { useStyles } from '@/components/desmos_profile/components/connections/styles';
import Pagination from '@/components/pagination';
import { usePagination, useScreenSize } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useMemo } from 'react';

type ConnectionsProps = {
  handleClose: () => void;
  open: boolean;
  data: ProfileConnectionType[];
};

const Connections: FC<ConnectionsProps> = ({ handleClose, open, data }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
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
      <DialogTitle disableTypography className={classes.header}>
        <Typography variant="h2">{t('connectionsTitle')}</Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
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
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Connections;
