import { atom } from 'recoil';

export interface WalletConnectURI {
  walletConnectURI: string;
}

const walletConnectURIinitialState: WalletConnectURI = {
  walletConnectURI: '',
};

export const walletConnectURIAtomState = atom<WalletConnectURI>({
  key: 'walletConnectURI',
  default: walletConnectURIinitialState,
  dangerouslyAllowMutability: true,
});
