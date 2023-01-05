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
import AuthorizeConnectionDialog from '@/components/nav/components/connect_wallet/authorize_connection';
// import ConnectWalletConnectDialog from '@/components/nav/components/connect_wallet/connect_wallet_connect';
import InstallKeplrWallet from '@/components/nav/components/connect_wallet/install_keplr_wallet';
import LoginSuccessDialog from '@/components/nav/components/connect_wallet/login_success';
import PairKeplrWalletDialog from '@/components/nav/components/connect_wallet/pair_keplr_wallet';
import SelectNetworkDialog from '@/components/nav/components/connect_wallet/select_network';
import { readIsUserLoggedIn } from '@/recoil/user';
import { useRecoilValue } from 'recoil';

const ConnectWallet: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const {
    handleCancel,
    handleCloseAuthorizeConnectionDialog,
    handleCloseInstallKeplrWalletDialog,
    handleCloseKeplrPairingDialog,
    handleCloseLoginSuccessDialog,
    handleCloseSelectNetworkDialog,
    handleConnectWallet,
    handleLogoutWallet,
    handleOpen,
    open,
    openAuthorizeConnectionDialog,
    openInstallKeplrWalletDialog,
    openKeplrPairingDialog,
    openLoginSuccessDialog,
    openSelectNetworkDialog,
    walletSelection,
    setWalletOption,
    tabValue,
    state,
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
                onClick={() => setWalletOption('wallet connect')}
                color="default"
                aria-label="connect-walletconnect-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.walletConnectLabel}>Wallet connect</div>
              </Button>
            </div>
            <div className={classes.connectKeplrButton}>
              <Button
                onClick={() => setWalletOption('keplr')}
                color="default"
                aria-label="connect-keplr-wallet-button"
                className={classes.walletButton}
              >
                <div className={classes.label}>Keplr</div>
              </Button>
            </div>
            <div className={classes.connectButterButton}>
              <Button
                onClick={() => setWalletOption('butter')}
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
      <InstallKeplrWallet
        walletName={walletSelection}
        walletUrl="https://www.keplr.app/download"
        open={openInstallKeplrWalletDialog}
        onClose={handleCloseInstallKeplrWalletDialog}
      />
      <PairKeplrWalletDialog
        walletName={walletSelection}
        open={openKeplrPairingDialog}
        onClose={handleCloseKeplrPairingDialog}
      />
      <AuthorizeConnectionDialog
        open={openAuthorizeConnectionDialog}
        onClose={handleCloseAuthorizeConnectionDialog}
      />
      <SelectNetworkDialog
        networkName="desmos"
        open={openSelectNetworkDialog}
        onClose={handleCloseSelectNetworkDialog}
      />
      <LoginSuccessDialog open={openLoginSuccessDialog} onClose={handleCloseLoginSuccessDialog} />
    </div>
  );
};

export default ConnectWallet;
