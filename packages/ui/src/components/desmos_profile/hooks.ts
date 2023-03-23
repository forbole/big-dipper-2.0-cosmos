import { useCallback, useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { TFunction } from 'next-i18next';

type DesmosProfileHooksProps = {
  t?: TFunction;
  bio?: string;
  links?: ApplicationLink[];
};

const appLinkDict = {
  twitter: 'https://twitter.com/',
  discord: 'https://discord.com/users/',
  github: 'https://github.com/',
  domain: 'https://',
};

export const useDesmosProfile = ({ t, bio, links }: DesmosProfileHooksProps) => {
  const [connectionsOpen, setConnectionsOpen] = useState(false);
  const [readMore, setReadMore] = useState<boolean | undefined>(true);
  const [appLinks, setAppLinks] = useState<{ appLink?: string; identifier?: string }[]>([{}]);

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

  // useEffect(() => {
  //   if (links) {

  //     links.map((link) => {
  //     switch (link.network) {
  //       let result;
  //       let username;
  //       case 'twitter':
  //         result = `${appLinkDict['twitter']}${link.indentifier}`;
  //         username = `@${link.identifier}`;
  //         break;
  //       default:
  //         result = '';
  //         username = '';
  //     }
  //     return {
  //       result,
  //       username
  //     }
  //   }
  //   })
  // }

  // }, [links])

  return {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
    handleCopyToClipboard,
    handleReadMore,
    readMore,
  };
};
