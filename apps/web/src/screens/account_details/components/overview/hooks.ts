import { useState } from 'react';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

export const useOverview = (t) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  return {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  };
};
