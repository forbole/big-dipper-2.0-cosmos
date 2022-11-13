import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Pagination from 'ui/components/pagination';
import { usePagination, useScreenSize } from '@hooks';
import { useStyles } from './styles';
import Desktop from './components/desktop';
import Mobile from './components/mobile';

const Connections: React.FC<{
  handleClose: () => void;
  open: boolean;
  data: ProfileConnectionType[];
}> = ({ handleClose, open, data }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, sliceItems } =
    usePagination({});
  const items = sliceItems(data);
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
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Connections;
