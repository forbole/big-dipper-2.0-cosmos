import { atomState } from '@/recoil/wallet/atom';
import type { AtomState } from '@/recoil/wallet/types';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ADDRESS_KEY } from '@/utils/localstorage';

const isClient = typeof window === 'object';

export const useWalletRecoil = () => {
  const [user, setUser] = useRecoilState(atomState);

  useEffect(() => {
    if (isClient) {
      const userAddress = localStorage.getItem(ADDRESS_KEY);
      const initSettings: AtomState = {
        address: userAddress ?? '',
        loggedIn: !!userAddress,
      };
      console.log(initSettings);
      console.log(localStorage);
      setUser(initSettings);
    }
  }, [setUser, user.address, user.loggedIn]);
};
