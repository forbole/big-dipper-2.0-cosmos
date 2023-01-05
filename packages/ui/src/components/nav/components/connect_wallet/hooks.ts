import { SigningCosmosClient } from '@cosmjs/launchpad';
import { writeUserAddress, writeIsUserLoggedIn } from '@/recoil/user';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { ADDRESS_KEY } from '@/utils/localstorage';

type UserState = {
  address: string;
  loggedIn: boolean;
};
const chainId = process.env.NEXT_PUBLIC_CHAIN_ID;

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
    localStorage.setItem(ADDRESS_KEY, '');
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
    setOpen(true); // TO DO
  };

  const handleConnectWalletConnect = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWallet = async () => {
    setOpen(false);
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
      setOpenKeplrPairingDialog(true);
    }
  };

  const continueToSelectNetworkDialog = async () => {
    setOpenKeplrPairingDialog(false);
    await window.keplr.enable(chainId);
    setOpenSelectNetworkDialog(true);
  };

  const continueToAuthorizeConnectionDialog = async () => {
    setOpenSelectNetworkDialog(false);
    setOpenAuthorizeConnectionDialog(true);
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
      // close the dialog after 3 seconds
      setTimeout(() => {
        setOpenAuthorizeConnectionDialog(false);
      }, 3000);

      setOpenLoginSuccessDialog(true);

      // close the dialog after 3 seconds
      setTimeout(() => {
        setOpenLoginSuccessDialog(false);
      }, 3000);
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
    handleCloseLoginSuccessDialog,
    openLoginSuccessDialog,
    handleConnectWalletConnectDialog,
    openConnectWalletConnectDialog,
    handleTabChange,
    tabValue,
    continueToSelectNetworkDialog,
    continueToPairingDialog,
    continueToAuthorizeConnectionDialog,
  };
};
