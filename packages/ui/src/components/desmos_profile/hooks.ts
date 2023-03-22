import { useCallback, useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { TFunction } from 'next-i18next';

type DesmosProfileHooksProps = {
  t?: TFunction;
  bio?: string;
};

export const useDesmosProfile = ({ t, bio }: DesmosProfileHooksProps) => {
  const [connectionsOpen, setConnectionsOpen] = useState(false);
  const [readMore, setReadMore] = useState<boolean | undefined>(true);

  const handleConnectionsOpen = useCallback(() => {
    setConnectionsOpen(true);
  }, []);

  const handleConnectionsClose = useCallback(() => {
    setConnectionsOpen(false);
  }, []);

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast<string>(t ? t('common:copied') : 'copied');
  };

  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  useEffect(() => {
    if ((bio?.match(/<br>/g) || []).length < 3) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  }, [bio]);

  return {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
    handleCopyToClipboard,
    handleReadMore,
    readMore,
  };
};
