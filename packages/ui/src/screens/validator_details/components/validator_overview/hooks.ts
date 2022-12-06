import copy from 'copy-to-clipboard';
import { Translate } from 'next-translate';
import { toast } from 'react-toastify';

export const useAddress = (t: Translate) => {
  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  return {
    handleCopyToClipboard,
  };
};
