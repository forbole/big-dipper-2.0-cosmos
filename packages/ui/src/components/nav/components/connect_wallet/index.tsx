import AuthorizeConnectionDialog from '@/components/nav/components/connect_wallet/authorize_connection';
import useConnectWalletList from '@/components/nav/components/connect_wallet/hooks';
import InstallKeplrExtensionDialog from '@/components/nav/components/connect_wallet/install_keplr_extension';
import LoginDialog from '@/components/nav/components/connect_wallet/login';
import LoginSuccessDialog from '@/components/nav/components/connect_wallet/login_success';
import PairConnectWalletDialog from '@/components/nav/components/connect_wallet/pair_connect_wallet';
import PairKeplrExtensionDialog from '@/components/nav/components/connect_wallet/pair_keplr_extension';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import { readIsUserLoggedIn } from '@/recoil/user';
import {
  readOpenAuthorizeConnectionDialog,
  readOpenInstallKeplrExtensionDialog,
  readOpenLoginDialog,
  readOpenLoginSuccessDialog,
  readOpenPairConnectWalletDialog,
  readOpenPairKeplrExtensionDialog,
  readWalletConnectURI,
} from '@/recoil/wallet';
import Button from '@mui/material/Button';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import LoginIcon from 'shared-utils/assets/icon-login.svg';
import LogoutIcon from 'shared-utils/assets/icon-logout.svg';

type ConnectWalletProps = {
  className?: string;
};

const ConnectWallet: FC<ConnectWalletProps> = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const openLoginDialog = useRecoilValue(readOpenLoginDialog);
  const openInstallKeplrExtensionDialog = useRecoilValue(readOpenInstallKeplrExtensionDialog);
  const openPairKeplrExtensionDialog = useRecoilValue(readOpenPairKeplrExtensionDialog);
  const openAuthorizeConnectionDialog = useRecoilValue(readOpenAuthorizeConnectionDialog);
  const openLoginSuccessDialog = useRecoilValue(readOpenLoginSuccessDialog);
  const openPairConnectWalletDialog = useRecoilValue(readOpenPairConnectWalletDialog);
  const walletConnectURI = useRecoilValue(readWalletConnectURI);

  const {
    errorMsg,
    closeAuthorizeConnectionDialog,
    closeInstallKeplrExtensionDialog,
    closeKeplrPairingDialog,
    closeLoginDialog,
    closeLoginSuccessDialog,
    closeWalletConnectDialog,
    handleConnectWallet,
    handleLogin,
    handleLogout,
  } = useConnectWalletList();
  return (
    <div className={classes.connectWallet}>
      <div
        onClick={loggedIn ? handleLogout : handleLogin}
        role="button"
        className={classes.icon}
        tabIndex={0}
        aria-label="connect-wallet-button"
      >
        {loggedIn ? (
          <LogoutIcon />
        ) : (
          <Button startIcon={<LoginIcon />} className={classes.logInButton}>
            {t('common:logIn')}
          </Button>
        )}
      </div>
      <LoginDialog
        open={openLoginDialog}
        handleConnectWallet={handleConnectWallet}
        onClose={closeLoginDialog}
      />
      <InstallKeplrExtensionDialog
        walletUrl="https://www.keplr.app/download"
        open={openInstallKeplrExtensionDialog}
        onClose={closeInstallKeplrExtensionDialog}
      />
      <PairKeplrExtensionDialog
        open={openPairKeplrExtensionDialog}
        onClose={closeKeplrPairingDialog}
      />
      <AuthorizeConnectionDialog
        open={openAuthorizeConnectionDialog}
        errorMsg={errorMsg}
        onClose={closeAuthorizeConnectionDialog}
      />
      <PairConnectWalletDialog
        open={openPairConnectWalletDialog}
        walletConnectURI={walletConnectURI}
        onClose={closeWalletConnectDialog}
      />
      <LoginSuccessDialog open={openLoginSuccessDialog} onClose={closeLoginSuccessDialog} />
    </div>
  );
};

export default ConnectWallet;
