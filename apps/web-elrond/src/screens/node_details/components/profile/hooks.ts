import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import { Translate } from 'next-translate';

export const useProfile = (t: Translate) => {
  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  return {
    handleCopyToClipboard,
  };
};
