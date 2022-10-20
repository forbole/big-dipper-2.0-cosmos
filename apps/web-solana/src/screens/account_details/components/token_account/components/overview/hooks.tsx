import { toast } from 'react-toastify';
import useTranslation from 'next-translate/useTranslation';
import copy from 'copy-to-clipboard';

export const useOverview = () => {
  const { t } = useTranslation('tokens');
  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  return {
    handleCopyToClipboard,
  };
};
