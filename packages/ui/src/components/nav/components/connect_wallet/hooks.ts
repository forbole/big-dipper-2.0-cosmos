import { useState } from 'react';
import { SigningCosmosClient } from '@cosmjs/launchpad';

export const useConnectWalletList = () => {
  const [open, setOpen] = useState(false);
  const [walletOption, setWalletOption] = useState('');
  const [showInstallWalletMsg, setShowInstallWalletMsg] = useState(false);

  const [openInstallExtensionDialog, setOpenInstallExtensionDialog] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutWallet = () => {
    setLoggedIn(false);
  };

  const handleShowWallet = () => {
    if (showWallet) {
      setShowWallet(false);
    } else setShowWallet(true);
  };

  const handleCloseWallet = () => {
    setShowWallet(false);
  };

  const handleShowInstallWalletMsg = () => {
    setShowInstallWalletMsg(true);
  };

  const handleConnectKeplr = () => {
    setWalletOption('keplr');
  };

  const setKeplrWallet = () => {
    setWalletOption('keplr');
  };

  const setWalletConnectWallet = () => {
    setWalletOption('wallet connect');
  };

  const setButterWallet = () => {
    setWalletOption('butter');
  };

  const handleCloseInstallExtensionDialog = () => {
    setOpenInstallExtensionDialog(false);
    setWalletOption('');
  };

  const handleConnectButter = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWalletConnect = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWallet = () => {
    setOpen(false);
    switch (walletOption) {
      case 'butter':
        break;
      case 'keplr':
        handleKeplrWalletConnection();
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
      setOpenInstallExtensionDialog(true);
    } else {
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

      console.log(cosmJS);
    }
  };

  return {
    open,
    loggedIn,
    showWallet,
    openInstallExtensionDialog,
    walletOption,
    handleOpen,
    handleConnectKeplr,
    setKeplrWallet,
    setWalletConnectWallet,
    setButterWallet,
    handleCloseInstallExtensionDialog,
    handleConnectButter,
    handleConnectWalletConnect,
    handleClose,
    handleCancel,
    handleLogoutWallet,
    handleShowWallet,
    handleCloseWallet,
    handleConnectWallet,
    handleShowInstallWalletMsg,
    showInstallWalletMsg,
  };
};
