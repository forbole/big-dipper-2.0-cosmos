import { useState } from 'react';

export const useConnectWalletList = () => {
  const [open, setOpen] = useState(false);
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

  const handleDisconnect = () => {
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

  const handleConnectKeplr = () => {
    setOpen(true); // TO DO
  };

  const handleConnectButter = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWalletConnect = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWallet = () => {
    setOpen(false);
  };

  return {
    open,
    loggedIn,
    showWallet,
    handleOpen,
    handleConnectKeplr,
    handleConnectButter,
    handleConnectWalletConnect,
    handleClose,
    handleCancel,
    handleDisconnect,
    handleShowWallet,
    handleCloseWallet,
    handleConnectWallet,
  };
};
