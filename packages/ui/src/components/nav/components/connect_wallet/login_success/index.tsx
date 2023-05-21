import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import LoginSuccessIcon from 'shared-utils/assets/icon-success.svg';

type LoginSuccessDialogProps = {
  open: boolean;
  onClose: () => void;
};

const LoginSuccessDialog: FC<LoginSuccessDialogProps> = ({ open, onClose }) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('common:loginSuccess')}
            </Typography>
            <div>
              <Typography className={classes.subtitle}>{t('common:loginSuccessMsg')}</Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <LoginSuccessIcon className={classes.loginSuccessIcon} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginSuccessDialog;
