import copy from 'copy-to-clipboard';
import { Translate } from 'next-translate';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useAddress = (t: Translate) => {
  const handleCopyToClipboard = useCallback(
    (value: string) => {
      copy(value);
      toast(t('common:copied'));
    },
    [t]
  );

  return {
    handleCopyToClipboard,
  };
};
