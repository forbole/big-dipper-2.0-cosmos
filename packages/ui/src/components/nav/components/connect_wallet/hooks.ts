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
import bech32 from 'bech32';
import { PubKey } from 'cosmjs-types/cosmos/crypto/secp256k1/keys';

type UserState = {
  address: string;
  pubKey: string;
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

const chainId = process.env.NEXT_PUBLIC_CHAIN_ID;

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
  const [userPubKey, seUserPubKey] = useRecoilState(writeUserPubKey) as [
    string,
    SetterOrUpdater<string>
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
    setUserState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const resetUserState = () => {
    handleSetUserState((prevState) => ({
      ...prevState,
      address: userAddress,
      pubKey: userPubKey,
      walletName,
      loggedIn: userIsLoggedIn,
    }));
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
      setWalletState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const resetWalletState = () => {
    handleSetWalletState((prevState) => ({
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

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
    resetUserState();
    resetWalletState();
  };

  const handleShowWalletDetails = () => {
    if (showWalletDetails) {
      setShowWalletDetails(false);
    } else setShowWalletDetails(true);
  };

  const handleLogin = () => {
    setOpenLoginDialog(true);
    console.log(process.env.NEXT_PUBLIC_LCD_KEPLR_URL);
  };

  const handleLogout = () => {
    localStorage.setItem(ADDRESS_KEY, '');
    setShowWalletDetails(false);
    setUserAddress('');
    setUserIsLoggedIn(false);
  };

  const setWalletOption = (walletOption: string) => {
    setWalletSelection(walletOption);
  };

  const handleCloseInstallKeplrWalletDialog = () => {
    setOpenInstallKeplrWalletDialog(false);
    setWalletOption('');
  };

  const handleCloseKeplrPairingDialog = () => {
    setOpenKeplrPairingDialog(false);
    setWalletOption('');
  };

  const handleCloseSelectNetworkDialog = () => {
    setOpenSelectNetworkDialog(false);
    setWalletOption('');
  };

  const handleCloseAuthorizeConnectionDialog = () => {
    setOpenAuthorizeConnectionDialog(false);
    setWalletOption('');
  };

  const handleCloseLoginSuccessDialog = () => {
    setOpenLoginSuccessDialog(false);
    setWalletOption('');
  };

  const handleConnectWalletConnectDialog = () => {
    setOpenConnectWalletConnectDialog(false);
    setWalletOption('');
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleConnectButter = () => {
    setOpenLoginDialog(false); // TO DO
  };

  const handleConnectWalletConnect = () => {
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

  const continueToPairingDialog = () => {
    if (!window.keplr) {
      setOpenInstallKeplrWalletDialog(true);
    } else {
      if (openInstallKeplrWalletDialog) {
        setOpenInstallKeplrWalletDialog(false);
      }
      setOpenKeplrPairingDialog(true);
    }
  };

  const continueToSelectNetworkDialog = async () => {
    setOpenKeplrPairingDialog(false);
    console.log(window);
    console.log(window.keplr);
    if (!window.getOfflineSigner || window.getOfflineSigner === undefined) {
      console.log('no offline signer');
      await window.keplr.enable(chainId);
      setOpenSelectNetworkDialog(true);
    } else {
      console.log(window.getOfflineSigner);
      console.log('offline signer');
      await window.keplr.enable(chainId);
      setOpenSelectNetworkDialog(true);
    }
    console.log(window);
    console.log(window.keplr);
  };

  const continueToAuthorizeConnectionDialog = async () => {
    setOpenSelectNetworkDialog(false);
    setOpenAuthorizeConnectionDialog(true);
    const offlineSigner = getOfflineSigner();

    const offlineSignerAddress = await getOfflineSignerAddress(offlineSigner);
    const offlineSignerPubKey = await getOfflineSignerPubKey(offlineSigner);
    const cosmJS = getCosmosClient(offlineSignerAddress, offlineSigner);

    if (cosmJS) {
      const key = await window.keplr.getKey('cosmoshub-4');
      localStorage.setItem(ADDRESS_KEY, offlineSignerAddress);
      localStorage.setItem(PUBKEY_KEY, offlineSignerPubKey);
      localStorage.setItem(WALLET_NAME_KEY, key.name);

      // close the dialog after 3 seconds
      setTimeout(() => {
        setOpenAuthorizeConnectionDialog(false);
      }, 3000);

      setOpenLoginSuccessDialog(true);

      // close the dialog after 3 seconds
      setTimeout(() => {
        setOpenLoginSuccessDialog(false);
      }, 3000);

      setUserAddress(offlineSignerAddress);
      seUserPubKey(offlineSignerPubKey);
      setWalletName(key.name);
      setUserIsLoggedIn(true);
    }
  };

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
  ) => {
    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();
    // console.log(accounts[0].pubkey);
    // console.log(accounts[0].pubkey.toString());

    return accounts[0].pubkey.toString();
  };

  const getCosmosClient = (
    address: string,
    offlineSigner: OfflineAminoSigner & OfflineDirectSigner
  ) => {
    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(
      process.env.NEXT_PUBLIC_LCD_KEPLR_URL,
      // 'https://lcd-cosmoshub.keplr.app',
      address,
      offlineSigner
    );
    return cosmJS;
  };

  return {
    tabValue,
    userState,
    walletState,
    showWalletDetails,
    handleLogin,
    handleCloseLoginDialog,
    setWalletOption,
    handleCloseInstallKeplrWalletDialog,
    handleCloseKeplrPairingDialog,
    handleConnectButter,
    handleConnectWalletConnect,
    handleLogout,
    handleShowWalletDetails,
    handleConnectWallet,
    handleCloseSelectNetworkDialog,
    handleCloseAuthorizeConnectionDialog,
    handleCloseLoginSuccessDialog,
    handleConnectWalletConnectDialog,
    handleTabChange,
    continueToSelectNetworkDialog,
    continueToPairingDialog,
    continueToAuthorizeConnectionDialog,
  };
};

export default useConnectWalletList;
