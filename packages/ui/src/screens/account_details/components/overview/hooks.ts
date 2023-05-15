import copy from 'copy-to-clipboard';
import type { TFunction } from '@/hooks/useAppTranslation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useOverview = (t?: TFunction) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast<string>(t ? t('common:copied') : 'copied');
  };

  return {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  };
};
