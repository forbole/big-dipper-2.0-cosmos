import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import { Translate } from 'next-translate';
import { useCallback } from 'react';

export const useOverview = (t: Translate) => {
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
