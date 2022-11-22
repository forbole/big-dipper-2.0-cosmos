import { useState } from 'react';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import { Translate } from 'next-translate';

export const useOverview = (t?: Translate) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t ? t('common:copied') : 'copied');
  };

  return {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  };
};
