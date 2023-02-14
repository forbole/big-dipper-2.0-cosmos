import copy from 'copy-to-clipboard';
import { TFunction } from 'next-i18next';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useProfile = (t: TFunction) => {
  const handleCopyToClipboard = useCallback(
    (value: string) => {
      copy(value);
      toast<string>(t('common:copied'));
    },
    [t]
  );

  return {
    handleCopyToClipboard,
  };
};
