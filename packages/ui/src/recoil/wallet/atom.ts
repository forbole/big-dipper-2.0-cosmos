import { atom } from 'recoil';

export interface WalletState {
  openAuthorizeConnectionDialog: boolean;
  openInstallKeplrExtensionDialog: boolean;
  openLoginDialog: boolean;
  openLoginSuccessDialog: boolean;
  openPairConnectWalletDialog: boolean;
  openPairKeplrExtensionDialog: boolean;
  openSelectNetworkDialog: boolean;
  walletSelection: string;
}

const initialState: WalletState = {
  openAuthorizeConnectionDialog: false,
  openInstallKeplrExtensionDialog: false,
  openLoginDialog: false,
  openLoginSuccessDialog: false,
  openPairConnectWalletDialog: false,
  openPairKeplrExtensionDialog: false,
  openSelectNetworkDialog: false,
  walletSelection: '',
};

export const atomState = atom<WalletState>({
  key: 'wallet',
  default: initialState,
  dangerouslyAllowMutability: true,
});
