import { SigningCosmosClient } from '@cosmjs/launchpad';
import { writeUserAddress, writeIsUserLoggedIn } from '@/recoil/user';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { ADDRESS_KEY } from '@/utils/localstorage';

type UserState = {
  address: string;
  loggedIn: boolean;
  // showKeplrPairingDialog: boolean;
};

type WalletState = {
  showInstallKeplrWalletDialog: boolean;
  showKeplrPairingDialog: boolean;
  showSelectNetworkDialog: boolean;
  showAuthorizeConnectionDialog: boolean;
  showLoginSuccessDialog: boolean;
  showConnectWalletConnectDialog: boolean;
};

export const useConnectWalletList = () => {
  const [userAddress, setUserAddress] = useRecoilState(writeUserAddress) as [
    string,
    SetterOrUpdater<string>
  ];
  const [userIsLoggedIn, setUserIsLoggedIn] = useRecoilState(writeIsUserLoggedIn) as [
    boolean,
    SetterOrUpdater<boolean>
  ];

  const [open, setOpen] = useState(false);
  const [walletSelection, setWalletSelection] = useState('');
  const [openInstallKeplrWalletDialog, setOpenInstallKeplrWalletDialog] = useState(false);
  const [openKeplrPairingDialog, setOpenKeplrPairingDialog] = useState(false);
  const [openSelectNetworkDialog, setOpenSelectNetworkDialog] = useState(false);
  const [openAuthorizeConnectionDialog, setOpenAuthorizeConnectionDialog] = useState(false);
  const [openLoginSuccessDialog, setOpenLoginSuccessDialog] = useState(false);
  const [openConnectWalletConnectDialog, setOpenConnectWalletConnectDialog] = useState(false);
  const [tabValue, setTabValue] = useState(1);

  const [loggedIn, setLoggedIn] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [state, setState] = useState({
    address: userAddress,
    loggedIn: userIsLoggedIn,
  });

  const handleSetState = useCallback((stateChange: (prevState: UserState) => UserState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const resetSettings = () => {
    handleSetState((prevState) => ({
      ...prevState,
      address: userAddress,
      loggedIn: userIsLoggedIn,
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    resetSettings();
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowWallet = () => {
    if (showWallet) {
      setShowWallet(false);
    } else setShowWallet(true);
  };

  const handleLogoutWallet = () => {
    setLoggedIn(false);
    localStorage.setItem('userAddress', '');
    resetSettings();
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

  const handleLoginSuccessDialog = () => {
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
    setOpen(true); // TO DO
  };

  const handleConnectWalletConnect = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWallet = async () => {
    setOpen(false);
    console.log(walletSelection);
    switch (walletSelection) {
      case 'butter':
        break;
      case 'keplr':
        await handleKeplrWalletConnection();
        break;
      case 'wallet connect':
        break;
      case '':
        break;
      default:
        break;
    }
  };

  const handleKeplrWalletConnection = async () => {
    if (!window.keplr) {
      setOpenInstallKeplrWalletDialog(true);
    } else {
      setOpenKeplrPairingDialog(true);
      // setOpenSelectNetworkDialog(true);
      // setOpenAuthorizeConnectionDialog(true);
      // setOpenLoginSuccessDialog(true);
      // setOpenConnectWalletConnectDialog(true);

      const chainId = process.env.NEXT_PUBLIC_CHAIN_ID;
      // // Enabling before using the Keplr is recommended.
      // // This method will ask the user whether to allow access if they haven't visited this website.
      // // Also, it will request that the user unlock the wallet if the wallet is locked.
      await window.keplr.enable(chainId);
      const offlineSigner = window.keplr.getOfflineSigner(chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();

      // Initialize the gaia api with the offline signer that is injected by Keplr extension.
      const cosmJS = new SigningCosmosClient(
        process.env.NEXT_PUBLIC_LCD_KEPLR_URL,
        // 'https://lcd-cosmoshub.keplr.app',
        accounts[0].address,
        offlineSigner
      );

      if (cosmJS) {
        localStorage.setItem(ADDRESS_KEY, accounts[0].address);
      }
    }
  };

  return {
    open,
    handleOpen,
    handleClose,
    state,
    handleCancel,
    loggedIn,
    showWallet,
    openInstallKeplrWalletDialog,
    walletSelection,
    openKeplrPairingDialog,
    setWalletOption,
    handleCloseInstallKeplrWalletDialog,
    handleCloseKeplrPairingDialog,
    handleConnectButter,
    handleConnectWalletConnect,
    handleLogoutWallet,
    handleShowWallet,
    handleConnectWallet,
    openSelectNetworkDialog,
    handleCloseSelectNetworkDialog,
    openAuthorizeConnectionDialog,
    handleCloseAuthorizeConnectionDialog,
    handleLoginSuccessDialog,
    openLoginSuccessDialog,
    handleConnectWalletConnectDialog,
    openConnectWalletConnectDialog,
    handleTabChange,
    tabValue,
  };
};
