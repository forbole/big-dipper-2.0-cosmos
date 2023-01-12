import { atomState } from '@/recoil/wallet/atom';
import { mergeStateChange } from '@/utils/merge_state_change';
import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';

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

const getOpenInstallKeplrWalletDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openInstallKeplrWalletDialog;
};

export const writeOpenInstallKeplrWalletDialog = selector({
  key: 'wallet.write.openInstallKeplrWalletDialog',
  get: getOpenInstallKeplrWalletDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openInstallKeplrWalletDialog: value });
    set(atomState, newState);
  },
});

export const readOpenInstallKeplrWalletDialog = selector({
  key: 'wallet.read.openInstallKeplrWalletDialog',
  get: getOpenInstallKeplrWalletDialog,
});

const getOpenKeplrPairingDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openKeplrPairingDialog;
};

export const writeOpenKeplrPairingDialog = selector({
  key: 'wallet.write.openKeplrPairingDialog',
  get: getOpenKeplrPairingDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openKeplrPairingDialog: value });
    set(atomState, newState);
  },
});

export const readOpenKeplrPairingDialog = selector({
  key: 'wallet.read.openKeplrPairingDialog',
  get: getOpenKeplrPairingDialog,
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

const getOpenConnectWalletConnectDialog: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.openConnectWalletConnectDialog;
};

export const writeOpenConnectWalletConnectDialog = selector({
  key: 'wallet.write.openConnectWalletConnectDialog',
  get: getOpenConnectWalletConnectDialog,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { openConnectWalletConnectDialog: value });
    set(atomState, newState);
  },
});

export const readOpenConnectWalletConnectDialog = selector({
  key: 'wallet.read.openConnectWalletConnectDialog',
  get: getOpenConnectWalletConnectDialog,
});

const getTabValue: ReadOnlySelectorOptions<number>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.tabValue;
};

export const writeTabValue = selector({
  key: 'wallet.write.tabValue',
  get: getTabValue,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { tabValue: value });
    set(atomState, newState);
  },
});

export const readTabValue = selector({
  key: 'wallet.read.tabValue',
  get: getTabValue,
});

const getShowWalletDetails: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.showWalletDetails;
};

export const writeShowWalletDetails = selector({
  key: 'wallet.write.showWalletDetails',
  get: getShowWalletDetails,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { showWalletDetails: value });
    set(atomState, newState);
  },
});

export const readShowWalletDetails = selector({
  key: 'wallet.read.showWalletDetails',
  get: getShowWalletDetails,
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
