import { atomState } from '@/recoil/user/atom';
import type { AtomState } from '@/recoil/user/types';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ADDRESS_KEY, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';

const isClient = typeof window === 'object';

export const useUserRecoil = () => {
  const [_, setUser] = useRecoilState(atomState);
  let userAddress;
  let userPubKey;
  let userWalletName;
  let loggedIn;
  let parsedPubKey;

  useEffect(() => {
    if (isClient) {
      userAddress = localStorage.getItem(ADDRESS_KEY) ?? '';
      userPubKey = localStorage.getItem(PUBKEY_KEY);
      userWalletName = localStorage.getItem(WALLET_NAME_KEY) ?? '';
      loggedIn = !!localStorage.getItem(ADDRESS_KEY);
      parsedPubKey = userPubKey ? JSON.parse(userPubKey) : { type: '', value: '' };

      const initSettings: AtomState = {
        address: userAddress,
        pubKey: parsedPubKey,
        walletName: userWalletName,
        loggedIn: !!userAddress,
      };
      setUser(initSettings);
    }
  }, [setUser, userAddress, parsedPubKey, userWalletName, loggedIn]);
};
