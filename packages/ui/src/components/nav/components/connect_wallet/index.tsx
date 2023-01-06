import useConnectWalletList from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import classnames from 'classnames';
import LoginIcon from 'shared-utils/assets/icon-login.svg';
import LogoutIcon from 'shared-utils/assets/icon-logout.svg';
import React from 'react';
import AuthorizeConnectionDialog from '@/components/nav/components/connect_wallet/authorize_connection';
import InstallKeplrWalletDialog from '@/components/nav/components/connect_wallet/install_keplr_wallet';
import LoginDialog from '@/components/nav/components/connect_wallet/login';
import LoginSuccessDialog from '@/components/nav/components/connect_wallet/login_success';
import PairKeplrWalletDialog from '@/components/nav/components/connect_wallet/pair_keplr_wallet';
import SelectNetworkDialog from '@/components/nav/components/connect_wallet/select_network';
import { readIsUserLoggedIn } from '@/recoil/user';
import { useRecoilValue } from 'recoil';
import {
  readOpenLoginDialog,
  readWalletSelection,
  readOpenInstallKeplrWalletDialog,
  readOpenKeplrPairingDialog,
  readOpenSelectNetworkDialog,
  readOpenAuthorizeConnectionDialog,
  readOpenLoginSuccessDialog,
  // readOpenConnectWalletConnectDialog,
  // readTabValue,
} from '@/recoil/wallet';

const ConnectWallet: React.FC<{
  className?: string;
}> = (props) => {
  const networkName = process.env.NEXT_PUBLIC_NETWORK_NAME ?? 'Desmos';
  const classes = useStyles();
  const loggedIn = useRecoilValue(readIsUserLoggedIn);
  const openLoginDialog = useRecoilValue(readOpenLoginDialog);
  const walletSelection = useRecoilValue(readWalletSelection);
  const openInstallKeplrWalletDialog = useRecoilValue(readOpenInstallKeplrWalletDialog);
  const openKeplrPairingDialog = useRecoilValue(readOpenKeplrPairingDialog);
  const openSelectNetworkDialog = useRecoilValue(readOpenSelectNetworkDialog);
  const openAuthorizeConnectionDialog = useRecoilValue(readOpenAuthorizeConnectionDialog);
  const openLoginSuccessDialog = useRecoilValue(readOpenLoginSuccessDialog);
  // const openConnectWalletConnectDialog = useRecoilValue(readOpenConnectWalletConnectDialog);
  // const tabValue = useRecoilValue(readTabValue);

  const {
    handleCloseAuthorizeConnectionDialog,
    handleCloseInstallKeplrWalletDialog,
    handleCloseKeplrPairingDialog,
    handleCloseLoginSuccessDialog,
    handleCloseSelectNetworkDialog,
    handleConnectWallet,
    handleLogout,
    handleLogin,
    setWalletOption,
    handleCloseLoginDialog,
    continueToPairingDialog,
    continueToAuthorizeConnectionDialog,
    continueToSelectNetworkDialog,
  } = useConnectWalletList();
  return (
    <div>
      <div
        onClick={loggedIn ? handleLogout : handleLogin}
        role="button"
        className={classnames(props.className, classes.icon)}
        tabIndex={0}
        aria-label="connect-wallet-button"
      >
        {loggedIn ? <LogoutIcon /> : <LoginIcon />}
      </div>
      <LoginDialog
        open={openLoginDialog}
        setWallet={setWalletOption}
        onClose={handleCloseLoginDialog}
        onContinue={handleConnectWallet}
      />
      <InstallKeplrWalletDialog
        walletName={walletSelection}
        walletUrl="https://www.keplr.app/download"
        open={openInstallKeplrWalletDialog}
        onClose={handleCloseInstallKeplrWalletDialog}
        onContinue={continueToPairingDialog}
      />
      <PairKeplrWalletDialog
        walletName={walletSelection}
        open={openKeplrPairingDialog}
        onClose={handleCloseKeplrPairingDialog}
        onContinue={continueToSelectNetworkDialog}
      />
      <AuthorizeConnectionDialog
        open={openAuthorizeConnectionDialog}
        onClose={handleCloseAuthorizeConnectionDialog}
      />
      <SelectNetworkDialog
        networkName={networkName}
        open={openSelectNetworkDialog}
        onClose={handleCloseSelectNetworkDialog}
        onContinue={continueToAuthorizeConnectionDialog}
      />
      <LoginSuccessDialog open={openLoginSuccessDialog} onClose={handleCloseLoginSuccessDialog} />
    </div>
  );
};

export default ConnectWallet;
