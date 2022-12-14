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
import LogoutIcon from 'shared-utils/assets/icon-logout.svg';
import React from 'react';
import ConnectWalletDropDown from '@/components/nav/components/connect_wallet_drop_down';

const ConnectWallet: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const {
    open,
    loggedIn,
    showWallet,
    handleOpen,
    handleConnectKeplr,
    handleConnectButter,
    handleConnectWalletConnect,
    handleCancel,
    handleLogoutWallet,
    handleConnectWallet,
  } = useConnectWalletList();

  return (
    <div>
      <div
        onClick={!loggedIn ? handleOpen : handleLogoutWallet}
        role="button"
        className={classnames(props.className, classes.icon)}
        tabIndex={0}
        aria-label="connect-wallet-button"
      >
        {!loggedIn ? <LoginIcon /> : <LogoutIcon />}
      </div>
      <ConnectWalletDropDown
        className={classnames(classes.networkList, {
          open: showWallet,
        })}
      />
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
            <div className={classes.connectWalletButton}>
              <Button
                onClick={handleConnectWalletConnect}
                color="default"
                aria-label="connect-walletconnect-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.walletConnectLabel}>Wallet connect</div>
              </Button>
            </div>
            <div className={classes.connectKeplrButton}>
              <Button
                onClick={handleConnectKeplr}
                color="default"
                aria-label="connect-keplr-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.label}>Keplr</div>
              </Button>
            </div>
            <div className={classes.connectButterButton}>
              <Button
                onClick={handleConnectButter}
                color="default"
                aria-label="connect-butter-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.label}>Butter</div>
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={handleConnectWallet} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConnectWallet;
