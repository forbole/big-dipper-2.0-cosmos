import { useState } from 'react';

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
    setOpenKeplrLogin(true);
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
        console.log('butter');
        break;
      case 'keplr':
        console.log('keplr');
        setOpenInstallExtensionDialog(true); // TO DO
        break;
      case 'wallet connect':
        console.log('wallet connect');
        break;
      case '':
        console.log('nothing selected');
        break;
      default:
        break;
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
