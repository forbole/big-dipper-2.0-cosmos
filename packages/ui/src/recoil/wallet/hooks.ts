import { atomState } from '@/recoil/wallet/atom';
import type { AtomState } from '@/recoil/wallet/types';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const isClient = typeof window === 'object';

export const useWalletRecoil = () => {
  const [wallet, setWallet] = useRecoilState(atomState);

  useEffect(() => {
    if (isClient) {
      const initSettings: AtomState = {
        openLoginDialog: false,
        walletSelection: '',
        openInstallKeplrWalletDialog: false,
        openKeplrPairingDialog: false,
        openSelectNetworkDialog: false,
        openAuthorizeConnectionDialog: false,
        openLoginSuccessDialog: false,
        openConnectWalletConnectDialog: false,
        tabValue: 1,
        showWallet: false,
      };
      setWallet(initSettings);
    }
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
    wallet.showWallet,
  ]);
};
