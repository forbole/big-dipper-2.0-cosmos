import { useConnectWalletList } from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import LoginIcon from 'shared-utils/assets/icon-login.svg';
import React from 'react';

const ConnectWallet: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const {
    open,
    handleOpen,
    handleConnectKeplr,
    handleConnectButter,
    handleConnectWalletConnect,
    handleCancel,
    handleConnectWallet,
  } = useConnectWalletList();

  return (
    <div>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames(props.className, classes.icon)}
        tabIndex={0}
        aria-label="connect-wallet-button"
      >
        <LoginIcon />
      </div>
      <Dialog maxWidth="md" onClose={handleCancel} open={open} className={classes.dialog}>
        <DialogTitle disableTypography>
          <div className={classes.header}>
            <div className={classes.title}>
              <Typography variant="h2" gutterBottom>
                {t('logIn')}
              </Typography>
            </div>
            <div>
              <Typography variant="h4">{t('welcomeToBigDipper')}</Typography>
            </div>
            <IconButton aria-label="close" onClick={handleCancel} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent style={{ overflow: 'visible' }}>
          <div className={classes.dialogContent}>
            <div className={classes.connectConnectWallet}>
              <Button
                onClick={handleConnectWalletConnect}
                color="default"
                aria-label="connect-walletconnect-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.buttonLabel}>
                  <Typography variant="h4" noWrap>
                    Wallet connect
                  </Typography>
                </div>
              </Button>
            </div>
            <div className={classes.connectKeplrButton}>
              <Button
                onClick={handleConnectKeplr}
                color="default"
                aria-label="connect-keplr-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.buttonLabel}>
                  <Typography variant="h4" align="left">
                    Keplr
                  </Typography>
                </div>
              </Button>
            </div>
            <div className={classes.connectButterButton}>
              <Button
                onClick={handleConnectButter}
                color="default"
                aria-label="connect-butter-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.buttonLabel}>
                  <Typography variant="h4">Butter</Typography>
                </div>
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={handleConnectWallet} color="primary" className={classes.button}>
              <Typography variant="h3">{t('continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConnectWallet;
