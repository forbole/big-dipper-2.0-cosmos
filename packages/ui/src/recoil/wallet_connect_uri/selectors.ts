import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';
import { walletConnectURIAtomState } from '@/recoil/wallet_connect_uri/atom';
import { mergeStateChange } from '@/utils/merge_state_change';
import { WalletConnectURI } from '@/recoil/wallet_connect_uri/types';

const getWalletConnectURI: ReadOnlySelectorOptions<WalletConnectURI>['get'] = ({ get }) => {
  const state = get(walletConnectURIAtomState);
  return state.walletConnectURI;
};

export const writeWalletConnectURI = selector({
  key: 'walletConnectURI.write.walletConnectURI',
  get: getWalletConnectURI,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(walletConnectURIAtomState);
    const newState = mergeStateChange(prevState, { walletConnectURI: value });
    set(walletConnectURIAtomState, newState);
  },
});

export const readWalletConnectURI = selector({
  key: 'walletConnectURI.read.walletConnectURI',
  get: getWalletConnectURI,
});
