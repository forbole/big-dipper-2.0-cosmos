import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { walletConnectURIAtomState } from '@/recoil/wallet_connect_uri/atom';
import { WalletConnectURI } from '@/recoil/wallet_connect_uri/types';
import { WC_URI } from '@/utils/localstorage';

const isClient = typeof window === 'object';

export const useWalletURIRecoil = () => {
  const [_, setUser] = useRecoilState(walletConnectURIAtomState);
  const [uri, setUri] = useState('');

  useEffect(() => {
    if (isClient) {
      setUri(localStorage.getItem(WC_URI) ?? '');

      const initSettings: WalletConnectURI = {
        walletConnectURI: uri,
      };
      setUser(initSettings);
    }
  }, [setUser, uri]);
};
