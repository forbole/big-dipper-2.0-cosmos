import { useState } from 'react';

export const useConnectWalletList = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConnectKeplr = () => {
    setOpen(false); // TO DO
  };

  const handleConnectForboleX = () => {
    setOpen(false); // TO DO
  };

  const handleConnectWalletConnect = () => {
    setOpen(false); // TO DO
  };

  return {
    open,
    handleOpen,
    handleConnectKeplr,
    handleConnectForboleX,
    handleConnectWalletConnect,
    handleClose,
    handleCancel,
  };
};
