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

type LoginDialogProps = {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
  setWallet: (walletOption: string) => void;
};

const LoginDialog: FC<LoginDialogProps> = ({ open, onClose, onContinue, setWallet }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Dialog maxWidth="md" onClose={onClose} open={open} className={classes.dialog}>
        <DialogTitle>
          <div className={classes.header}>
            <div className={classes.title}>
              <Typography variant="h2" gutterBottom>
                {t('common:logIn')}
              </Typography>
            </div>
            <div>
              <Typography variant="h4">{t('common:welcomeToBigDipper')}</Typography>
            </div>
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent style={{ overflow: 'visible', alignSelf: 'center' }}>
          <div className={classes.dialogContent}>
            <div className={classes.connectWalletButton}>
              <Button
                onClick={(e: { preventDefault: () => void }) => {
                  e.preventDefault();
                  setWallet('Wallet Connect');
                }}
                aria-label="connect-walletconnect-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.walletConnectLabel}>Wallet connect</div>
              </Button>
            </div>
            <div className={classes.connectKeplrButton}>
              <Button
                onClick={(e: { preventDefault: () => void }) => {
                  e.preventDefault();
                  setWallet('Keplr Wallet');
                }}
                aria-label="connect-keplr-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.label}>Keplr</div>
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={onContinue} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('common:continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
