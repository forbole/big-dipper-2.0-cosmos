import { SigningCosmosClient } from '@cosmjs/launchpad';
import {
  writeUserAddress,
  writeIsUserLoggedIn,
  writeUserPubKey,
  writeWalletName,
} from '@/recoil/user';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { ADDRESS_KEY, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';
import {
  writeOpenLoginDialog,
  writeWalletSelection,
  writeOpenInstallKeplrWalletDialog,
  writeOpenKeplrPairingDialog,
  writeOpenSelectNetworkDialog,
  writeOpenAuthorizeConnectionDialog,
  writeOpenLoginSuccessDialog,
  writeOpenConnectWalletConnectDialog,
  writeTabValue,
  writeShowWalletDetails,
} from '@/recoil/wallet';
import { OfflineAminoSigner, OfflineDirectSigner } from '@keplr-wallet/types';
import { toBase64 } from '@cosmjs/encoding';
import { PubKey } from '@/recoil/user/atom';

const chainId = process?.env?.NEXT_PUBLIC_CHAIN_ID ?? '';
const keplrURL = process?.env?.NEXT_PUBLIC_LCD_KEPLR_URL ?? '';

type UserState = {
  address: string;
  pubKey: PubKey;
  walletName: string;
  loggedIn: boolean;
};

type WalletState = {
  openLoginDialog: boolean;
  walletSelection: string;
  openInstallKeplrWalletDialog: boolean;
  openKeplrPairingDialog: boolean;
  openSelectNetworkDialog: boolean;
  openAuthorizeConnectionDialog: boolean;
  openLoginSuccessDialog: boolean;
  openConnectWalletConnectDialog: boolean;
  tabValue: number;
  showWalletDetails: boolean;
};

const useConnectWalletList = () => {
  // UserState
  const [userAddress, setUserAddress] = useRecoilState(writeUserAddress) as [
    string,
    SetterOrUpdater<string>
  ];
  const [userIsLoggedIn, setUserIsLoggedIn] = useRecoilState(writeIsUserLoggedIn) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [userPubKey, setUserPubKey] = useRecoilState(writeUserPubKey) as [
    PubKey,
    SetterOrUpdater<PubKey>
  ];
  const [walletName, setWalletName] = useRecoilState(writeWalletName) as [
    string,
    SetterOrUpdater<string>
  ];

  // WalletState
  const [openLoginDialog, setOpenLoginDialog] = useRecoilState(writeOpenLoginDialog) as [
    boolean,
    SetterOrUpdater<boolean>
  ];
  const [walletSelection, setWalletSelection] = useRecoilState(writeWalletSelection) as [
    string,
    SetterOrUpdater<string>
  ];
  const [openInstallKeplrWalletDialog, setOpenInstallKeplrWalletDialog] = useRecoilState(
    writeOpenInstallKeplrWalletDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openKeplrPairingDialog, setOpenKeplrPairingDialog] = useRecoilState(
    writeOpenKeplrPairingDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openSelectNetworkDialog, setOpenSelectNetworkDialog] = useRecoilState(
    writeOpenSelectNetworkDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openAuthorizeConnectionDialog, setOpenAuthorizeConnectionDialog] = useRecoilState(
    writeOpenAuthorizeConnectionDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openLoginSuccessDialog, setOpenLoginSuccessDialog] = useRecoilState(
    writeOpenLoginSuccessDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [openConnectWalletConnectDialog, setOpenConnectWalletConnectDialog] = useRecoilState(
    writeOpenConnectWalletConnectDialog
  ) as [boolean, SetterOrUpdater<boolean>];
  const [tabValue, setTabValue] = useRecoilState(writeTabValue) as [
    number,
    SetterOrUpdater<number>
  ];
  const [showWalletDetails, setShowWalletDetails] = useRecoilState(writeShowWalletDetails) as [
    boolean,
    SetterOrUpdater<boolean>
  ];

  // UserState
  const [userState, setUserState] = useState({
    address: userAddress,
    pubKey: userPubKey,
    walletName,
    loggedIn: userIsLoggedIn,
  });

  const handleSetUserState = useCallback((stateChange: (prevState: UserState) => UserState) => {
    setUserState((prevState: UserState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const resetUserState = () => {
    handleSetUserState((prevState: UserState) => ({
      ...prevState,
      address: userAddress,
      pubKey: userPubKey,
      walletName,
      loggedIn: userIsLoggedIn,
    }));
    localStorage.setItem(ADDRESS_KEY, '');
    localStorage.setItem(PUBKEY_KEY, '');
    localStorage.setItem(WALLET_NAME_KEY, '');
  };

  // WalletState
  const [walletState, setWalletState] = useState({
    openLoginDialog,
    walletSelection,
    openInstallKeplrWalletDialog,
    openKeplrPairingDialog,
    openSelectNetworkDialog,
    openAuthorizeConnectionDialog,
    openLoginSuccessDialog,
    openConnectWalletConnectDialog,
    tabValue,
    showWalletDetails,
  });

  const handleSetWalletState = useCallback(
    (stateChange: (prevState: WalletState) => WalletState) => {
      setWalletState((prevState: WalletState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const resetWalletState = () => {
    handleSetWalletState((prevState: WalletState) => ({
      ...prevState,
      openLoginDialog,
      walletSelection,
      openInstallKeplrWalletDialog,
      openKeplrPairingDialog,
      openSelectNetworkDialog,
      openAuthorizeConnectionDialog,
      openLoginSuccessDialog,
      openConnectWalletConnectDialog,
      tabValue,
      showWalletDetails,
    }));
  };

  const continueToAuthorizeKeplrConnectionDialog = async () => {
    setOpenKeplrPairingDialog(false);
    setOpenAuthorizeConnectionDialog(true);

    // handle keplr connection
    await enableChain();
    const offlineSigner = getOfflineSigner();
    let offlineSignerAddress;
    try {
      offlineSignerAddress = await getOfflineSignerAddress(offlineSigner);
    } catch (e) {
      setOpenAuthorizeConnectionDialog(false);
      return;
    }

    const offlineSignerPubKey = await getOfflineSignerPubKey(offlineSigner);
    const cosmJS = getCosmosClient(offlineSignerAddress, offlineSigner);

    if (cosmJS) {
      const key = await getAccountKey();
      localStorage.setItem(ADDRESS_KEY, offlineSignerAddress);
      localStorage.setItem(PUBKEY_KEY, JSON.stringify(offlineSignerPubKey));
      localStorage.setItem(WALLET_NAME_KEY, key.name);
      setUserAddress(offlineSignerAddress);
      setUserPubKey(offlineSignerPubKey ?? { type: '', value: '' });
      setWalletName(key.name);
      setUserIsLoggedIn(true);

      continueToLoginSuccessDialog();
    }
  };

  const continueToLoginSuccessDialog = () => {
    const address = localStorage.getItem(ADDRESS_KEY);
    // check if user is logged in before opening login success dialog
    if (address !== '') {
      // close the dialog after 3 seconds
      setTimeout(() => {
        setOpenAuthorizeConnectionDialog(false);
        setOpenLoginSuccessDialog(true);
        setTimeout(() => {
          setOpenLoginSuccessDialog(false);
        }, 3000);
      }, 3000);
    }
  };

  const continueToPairingDialog = () => {
    if (!isKeplrAvailable()) {
      setOpenInstallKeplrWalletDialog(true);
    } else {
      // handle retry button
      if (openInstallKeplrWalletDialog) {
        setOpenInstallKeplrWalletDialog(false);
      }
      resetUserState();
      setOpenKeplrPairingDialog(true);
    }
  };

  const handleCloseAuthorizeConnectionDialog = () => {
    setOpenAuthorizeConnectionDialog(false);
    setWalletOption('');
  };

  const handleCloseInstallKeplrWalletDialog = () => {
    setOpenInstallKeplrWalletDialog(false);
    setWalletOption('');
  };

  const handleCloseKeplrPairingDialog = () => {
    setOpenKeplrPairingDialog(false);
    setWalletOption('');
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
    resetUserState();
    resetWalletState();
    setWalletOption('');
  };

  const handleCloseLoginSuccessDialog = () => {
    setOpenLoginSuccessDialog(false);
    setWalletOption('');
  };

  const handleCloseSelectNetworkDialog = () => {
    setOpenSelectNetworkDialog(false);
    setWalletOption('');
  };

  const handleCloseWalletDetails = () => {
    setShowWalletDetails(false);
  };

  const handleConnectButter = () => {
    setOpenLoginDialog(false); // TO DO
  };

  const handleConnectWallet = async () => {
    setOpenLoginDialog(false);
    switch (walletSelection) {
      case 'Butter':
        break;
      case 'Keplr Wallet':
        await continueToPairingDialog();
        break;
      case 'Wallet Connect':
        break;
      case '':
        break;
      default:
        break;
    }
  };

  const handleConnectWalletConnect = () => {
    setOpenLoginDialog(false); // TO DO
  };

  const handleConnectWalletConnectDialog = () => {
    setOpenConnectWalletConnectDialog(false);
    setWalletOption('');
  };

  const handleLogin = () => {
    setOpenLoginDialog(true);
  };

  const handleLogout = () => {
    localStorage.setItem(ADDRESS_KEY, '');
    localStorage.setItem(PUBKEY_KEY, '');
    localStorage.setItem(WALLET_NAME_KEY, '');
    setShowWalletDetails(false);
    setUserAddress('');
    setUserIsLoggedIn(false);
  };

  const handleOpenWalletDetails = () => {
    setShowWalletDetails(true);
  };

  const handleShowWalletDetails = () => {
    if (showWalletDetails) {
      setShowWalletDetails(false);
    } else setShowWalletDetails(true);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const setWalletOption = (walletOption: string) => {
    setWalletSelection(walletOption);
  };

  /// below not exported

  const isKeplrAvailable = () => !!window.keplr;

  const enableChain = () => window.keplr.enable(chainId);

  const getAccountKey = () => window.keplr.getKey('cosmoshub-4');

  const getOfflineSigner = () => {
    const offlineSigner = window.keplr.getOfflineSigner(chainId);
    return offlineSigner;
  };

  const getOfflineSignerAddress = async (
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
  ) => {
    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();
    return accounts[0].address;
  };

  const getOfflineSignerPubKey = async (
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
    // eslint-disable-next-line consistent-return
  ) => {
    const accounts = await offlineSigner.getAccounts();
    let pubkey;
    if (accounts) {
      if (isSecp256k1PubKey(accounts[0].pubkey)) {
        pubkey = encodeSecp256k1PubKey(accounts[0].pubkey);
      }
      if (isEd25519PubKey(accounts[0].pubkey)) {
        pubkey = encodeEd25519PubKey(accounts[0].pubkey);
      }
      return pubkey;
    }
  };

  const getCosmosClient = (
    address: string,
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
  ) => {
    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(keplrURL, address, offlineSigner);
    return cosmJS;
  };

  const encodeSecp256k1PubKey = (pubKey: Uint8Array): PubKey => ({
    type: 'tendermint/PubKeySecp256k1',
    value: toBase64(pubKey),
  });

  const encodeEd25519PubKey = (pubKey: Uint8Array): PubKey => ({
    type: 'tendermint/PubKeyEd25519',
    value: toBase64(pubKey),
  });

  const isSecp256k1PubKey = (pubKey: Uint8Array) => {
    if (pubKey.length !== 33 || (pubKey[0] !== 0x02 && pubKey[0] !== 0x03)) {
      return false;
    }
    return true;
  };

  const isEd25519PubKey = (pubKey: Uint8Array) => {
    if (pubKey.length !== 32) {
      return false;
    }
    return true;
  };

  return {
    showWalletDetails,
    tabValue,
    userState,
    walletState,
    continueToAuthorizeKeplrConnectionDialog,
    continueToLoginSuccessDialog,
    continueToPairingDialog,
    handleCloseAuthorizeConnectionDialog,
    handleCloseInstallKeplrWalletDialog,
    handleCloseKeplrPairingDialog,
    handleCloseLoginDialog,
    handleCloseLoginSuccessDialog,
    handleCloseSelectNetworkDialog,
    handleCloseWalletDetails,
    handleConnectButter,
    handleConnectWallet,
    handleConnectWalletConnect,
    handleConnectWalletConnectDialog,
    handleLogin,
    handleLogout,
    handleOpenWalletDetails,
    handleShowWalletDetails,
    handleTabChange,
    setWalletOption,
  };
};

export default useConnectWalletList;
