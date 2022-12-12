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
    handleConnectForboleX,
    handleConnectWalletConnect,
    handleCancel,
    handleShowWallet,
  } = useConnectWalletList();

  return (
    <div>
      <div
        onClick={!loggedIn ? handleOpen : handleShowWallet}
        role="button"
        className={classnames(props.className, classes.icon)}
        tabIndex={0}
        aria-label="connect-wallet-button"
      >
        {!loggedIn ? t('connectWallet') : t('connected')}
      </div>
      <ConnectWalletDropDown
        className={classnames(classes.networkList, {
          open: showWallet,
        })}
      />
      <Dialog maxWidth="md" onClose={handleCancel} open={open} className={classes.dialog}>
        <DialogTitle disableTypography className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h2">{t('connectWallet')}</Typography>
          </div>
          <IconButton aria-label="close" onClick={handleCancel} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.connectButton}>
            <Button
              onClick={handleConnectKeplr}
              color="primary"
              aria-label="connect-keplr-wallet-button"
              className={classes.walletButton}
            >
              Keplr
            </Button>
          </div>
          <div className={classes.connectButton}>
            <Button
              onClick={handleConnectForboleX}
              color="primary"
              aria-label="connect-desmos-x-wallet-button"
              className={classes.walletButton}
            >
              Forbole X
            </Button>
          </div>
          <div className={classes.connectButton}>
            <Button
              onClick={handleConnectWalletConnect}
              color="primary"
              aria-label="connect-walletconnect-wallet-button"
              className={classes.walletButton}
            >
              WalletConnect
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Typography variant="h5" className={classes.actions} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
          </Typography>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConnectWallet;
