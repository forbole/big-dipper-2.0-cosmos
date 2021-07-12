import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Dialog,
  Typography,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useStyles } from './styles';

const Connections: React.FC<{
  handleClose: () => void;
  open: boolean;
}> = ({
  handleClose,
  open,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  return (
    <Dialog
      maxWidth="md"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.dialog}
    >
      <DialogTitle disableTypography className={classes.header}>
        <Typography variant="h2">
          {t('connectionsTitle')}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div>hello world</div>
    </Dialog>
  );
};

export default Connections;
