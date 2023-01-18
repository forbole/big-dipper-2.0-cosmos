import { atomState } from '@/recoil/wallet/atom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useWalletRecoil = () => {
  const [wallet, setWallet] = useRecoilState(atomState);

  useEffect(() => {
    // set the wallet values
  }, [
    setWallet,
    wallet.openAuthorizeConnectionDialog,
    wallet.openInstallKeplrExtensionDialog,
    wallet.openLoginDialog,
    wallet.openLoginSuccessDialog,
    wallet.openPairConnectWalletDialog,
    wallet.openPairKeplrExtensionDialog,
    wallet.openSelectNetworkDialog,
    wallet.showWalletDetails,
    wallet.tabValue,
    wallet.walletConnectURI,
    wallet.walletSelection,
  ]);
};
