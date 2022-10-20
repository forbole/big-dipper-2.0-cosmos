import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

export const useOverview = (t) => {
  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  return {
    handleCopyToClipboard,
  };
};
