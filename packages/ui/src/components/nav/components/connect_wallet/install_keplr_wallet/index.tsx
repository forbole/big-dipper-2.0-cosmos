import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import Trans from 'next-translate/Trans';

type InstallKeplrWalletDialogProps = {
  walletName: string;
  walletUrl: string;
  open: boolean;
  errorMsg: string;
  onClose: () => void;
  onContinue: () => void;
};

const InstallKeplrWalletDialog: FC<InstallKeplrWalletDialogProps> = ({
  walletName,
  walletUrl,
  open,
  errorMsg,
  onClose,
  onContinue,
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.warningMsg}>
            <div>
              <Typography variant="h2" align="center" className={classes.msgHeader}>
                {t('common:pleaseInstallWallet', {
                  wallet: walletName,
                })}
              </Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.warningMsgDetails}>
            <Typography variant="h4" align="center">
              <Trans
                i18nKey="common:couldntFindWalletExtension"
                components={[
                  <a target="_blank" rel="noreferrer" href={walletUrl}>
                    {}
                  </a>,
                ]}
                values={{
                  wallet: walletName,
                }}
              />
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.errorMsg}>
            {errorMsg !== undefined ? (
              <Typography variant="h4" className={classes.errorMsg}>
                {errorMsg}
              </Typography>
            ) : null}
          </div>
          <div className={classes.actions}>
            <Button onClick={onContinue} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('common:retry')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InstallKeplrWalletDialog;
