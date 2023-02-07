import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { atomState } from '@/recoil/wallet/atom';

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
    wallet.walletConnectURI,
    wallet.walletSelection,
  ]);
};
