import { atomState } from '@/recoil/user/atom';
import type { AtomState } from '@/recoil/user/types';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ADDRESS_KEY, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';

const isClient = typeof window === 'object';

export const useUserRecoil = () => {
  const [user, setUser] = useRecoilState(atomState);

  useEffect(() => {
    if (isClient) {
      const userAddress = localStorage.getItem(ADDRESS_KEY);
      const userPubKey = localStorage.getItem(PUBKEY_KEY);
      const userWalletName = localStorage.getItem(WALLET_NAME_KEY);

      const initSettings: AtomState = {
        address: userAddress ?? '',
        pubKey: userPubKey ?? '',
        walletName: userWalletName ?? '',
        loggedIn: !!userAddress,
      };
      setUser(initSettings);
    }
  }, [setUser, user.address, user.pubKey, user.walletName, user.loggedIn]);
};
