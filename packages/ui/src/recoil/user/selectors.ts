import { atomState, PubKey } from '@/recoil/user/atom';
import { mergeStateChange } from '@/utils/merge_state_change';
import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';

const getUserAddress: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.address;
};

export const writeUserAddress = selector({
  key: 'user.write.address',
  get: getUserAddress,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { address: value });
    set(atomState, newState);
  },
});

export const readUserAddress = selector({
  key: 'user.read.address',
  get: getUserAddress,
});

const getIsUserLoggedIn: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.loggedIn;
};

export const writeIsUserLoggedIn = selector({
  key: 'user.write.loggedIn',
  get: getIsUserLoggedIn,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { loggedIn: value });
    set(atomState, newState);
  },
});

export const readIsUserLoggedIn = selector({
  key: 'user.read.loggedIn',
  get: getIsUserLoggedIn,
});

const getWalletName: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.walletName;
};

export const writeWalletName = selector({
  key: 'user.write.walletName',
  get: getWalletName,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { walletName: value });
    set(atomState, newState);
  },
});

export const readWalletName = selector({
  key: 'user.read.walletName',
  get: getWalletName,
});

const getUserPubKey: ReadOnlySelectorOptions<PubKey>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.pubKey;
};

export const writeUserPubKey = selector({
  key: 'user.write.pubKey',
  get: getUserPubKey,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, {
      pubKey: { type: value.type, value: value.value },
    });
    set(atomState, newState);
  },
});

export const readUserPubKey = selector({
  key: 'user.read.pubKey',
  get: getUserPubKey,
});
