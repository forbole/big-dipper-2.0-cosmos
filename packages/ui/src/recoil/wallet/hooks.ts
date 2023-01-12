import { atomState } from '@/recoil/wallet/atom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useWalletRecoil = () => {
  const [wallet, setWallet] = useRecoilState(atomState);

  useEffect(() => {
    // set the wallet values
  }, [
    setWallet,
    wallet.openLoginDialog,
    wallet.walletSelection,
    wallet.openInstallKeplrWalletDialog,
    wallet.openKeplrPairingDialog,
    wallet.openSelectNetworkDialog,
    wallet.openAuthorizeConnectionDialog,
    wallet.openLoginSuccessDialog,
    wallet.openConnectWalletConnectDialog,
    wallet.tabValue,
    wallet.showWalletDetails,
    wallet.walletConnectURI,
  ]);
};
