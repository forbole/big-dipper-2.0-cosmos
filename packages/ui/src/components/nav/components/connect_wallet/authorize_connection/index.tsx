import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import LinearLoading from '@/components/linear_loading';

type AuthorizeConnectionDialogProps = {
  open: boolean;
  errorMsg?: string;
  onClose: () => void;
};

const AuthorizeConnectionDialog: FC<AuthorizeConnectionDialogProps> = ({
  open,
  errorMsg,
  onClose,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <Typography className={classes.title} gutterBottom>
              {t('common:waitingForAuthorization')}
            </Typography>
            <div>
              <Typography className={classes.subtitle}>{t('common:pleasePairWallet')}</Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <LinearLoading className={classes.loading} />
          {errorMsg !== undefined ? (
            <div className={classes.errorMsg}>Error: {errorMsg}</div>
          ) : (
            <div className={classes.loadingText}>
              <Typography variant="h4">{t('common:loading')}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthorizeConnectionDialog;
