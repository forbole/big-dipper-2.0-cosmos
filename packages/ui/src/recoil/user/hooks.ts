import { atomState } from '@/recoil/user/atom';
import type { AtomState } from '@/recoil/user/types';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ADDRESS_KEY } from '@/utils/localstorage';

const isClient = typeof window === 'object';

export const useUserRecoil = () => {
  const [user, setUser] = useRecoilState(atomState);

  useEffect(() => {
    if (isClient) {
      const userAddress = localStorage.getItem(ADDRESS_KEY);
      const initSettings: AtomState = {
        address: userAddress ?? '',
        loggedIn: !!userAddress,
      };
      setUser(initSettings);
    }
  }, [setUser, user.address, user.loggedIn]);
};
