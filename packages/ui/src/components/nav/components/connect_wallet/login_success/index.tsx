import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import LoginSuccessIcon from 'shared-utils/assets/icon-login-success.svg';

const LoginSuccessDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('common');

  return (
    <div>
      <Dialog maxWidth="md" onClose={props.onClose} open={props.open} className={classes.dialog}>
        <DialogTitle disableTypography>
          <div className={classes.warningMsg}>
            <div>
              <Typography variant="h2" align="center" className={classes.msgHeader}>
                {t('loginSuccess')}
              </Typography>
            </div>
            <IconButton aria-label="close" onClick={props.onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.loginSuccessMsgContent}>
            <Typography variant="h4" align="center">
              {t('loginSuccessMsg')}
            </Typography>
          </div>
          <LoginSuccessIcon className={classes.loginSuccessIcon} />
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={props.onContinue} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginSuccessDialog;
