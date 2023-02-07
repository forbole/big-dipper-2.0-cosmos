import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';
import { atomState } from '@/recoil/wallet/atom';
import { mergeStateChange } from '@/utils/merge_state_change';

const getOpenLoginDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openLoginDialog;
};

export const writeOpenLoginDialog = selector({
  key: 'wallet.write.openLoginDialog',
  get: getOpenLoginDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openLoginDialog: value });
    set(atomState, newState);
  },
});

export const readOpenLoginDialog = selector({
  key: 'wallet.read.openLoginDialog',
  get: getOpenLoginDialog,
});

const getWalletSelection: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.walletSelection;
};

export const writeWalletSelection = selector({
  key: 'wallet.write.walletSelection',
  get: getWalletSelection,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { walletSelection: value });
    set(atomState, newState);
  },
});

export const readWalletSelection = selector({
  key: 'wallet.read.walletSelection',
  get: getWalletSelection,
});

const getOpenInstallKeplrExtensionDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openInstallKeplrExtensionDialog;
};

export const writeOpenInstallKeplrExtensionDialog = selector({
  key: 'wallet.write.openInstallKeplrExtensionDialog',
  get: getOpenInstallKeplrExtensionDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openInstallKeplrExtensionDialog: value });
    set(atomState, newState);
  },
});

export const readOpenInstallKeplrExtensionDialog = selector({
  key: 'wallet.read.openInstallKeplrExtensionDialog',
  get: getOpenInstallKeplrExtensionDialog,
});

const getOpenPairKeplrExtensionDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openPairKeplrExtensionDialog;
};

export const writeOpenPairKeplrExtensionDialog = selector({
  key: 'wallet.write.openPairKeplrExtensionDialog',
  get: getOpenPairKeplrExtensionDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openPairKeplrExtensionDialog: value });
    set(atomState, newState);
  },
});

export const readOpenPairKeplrExtensionDialog = selector({
  key: 'wallet.read.openPairKeplrExtensionDialog',
  get: getOpenPairKeplrExtensionDialog,
});

const getOpenSelectNetworkDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openSelectNetworkDialog;
};

export const writeOpenSelectNetworkDialog = selector({
  key: 'wallet.write.openSelectNetworkDialog',
  get: getOpenSelectNetworkDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openSelectNetworkDialog: value });
    set(atomState, newState);
  },
});

export const readOpenSelectNetworkDialog = selector({
  key: 'wallet.read.openSelectNetworkDialog',
  get: getOpenSelectNetworkDialog,
});

const getOpenAuthorizeConnectionDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openAuthorizeConnectionDialog;
};

export const writeOpenAuthorizeConnectionDialog = selector({
  key: 'wallet.write.openAuthorizeConnectionDialog',
  get: getOpenAuthorizeConnectionDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openAuthorizeConnectionDialog: value });
    set(atomState, newState);
  },
});

export const readOpenAuthorizeConnectionDialog = selector({
  key: 'wallet.read.openAuthorizeConnectionDialog',
  get: getOpenAuthorizeConnectionDialog,
});

const getOpenLoginSuccessDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openLoginSuccessDialog;
};

export const writeOpenLoginSuccessDialog = selector({
  key: 'wallet.write.openLoginSuccessDialog',
  get: getOpenLoginSuccessDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openLoginSuccessDialog: value });
    set(atomState, newState);
  },
});

export const readOpenLoginSuccessDialog = selector({
  key: 'wallet.read.openLoginSuccessDialog',
  get: getOpenLoginSuccessDialog,
});

const getOpenPairConnectWalletDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openPairConnectWalletDialog;
};

export const writeOpenPairConnectWalletDialog = selector({
  key: 'wallet.write.openPairConnectWalletDialog',
  get: getOpenPairConnectWalletDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openPairConnectWalletDialog: value });
    set(atomState, newState);
  },
});

export const readOpenPairConnectWalletDialog = selector({
  key: 'wallet.read.openPairConnectWalletDialog',
  get: getOpenPairConnectWalletDialog,
});

const getWalletConnectURI: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.walletConnectURI;
};

export const writeWalletConnectURI = selector({
  key: 'wallet.write.walletConnectURI',
  get: getWalletConnectURI,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { walletConnectURI: value });
    set(atomState, newState);
  },
});

export const readWalletConnectURI = selector({
  key: 'wallet.read.walletConnectURI',
  get: getWalletConnectURI,
});
