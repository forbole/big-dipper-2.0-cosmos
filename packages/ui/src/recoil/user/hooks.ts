import { atomState } from '@/recoil/user/atom';
import type { AtomState } from '@/recoil/user/types';
import { ADDRESS_KEY, PUBKEY_KEY, WALLET_NAME_KEY } from '@/utils/localstorage';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const isClient = typeof window === 'object';

export const useUserRecoil = () => {
  const [_, setUser] = useRecoilState(atomState);
  const [userAddress, setUserAddress] = useState('');
  const [userPubKey, setUserPubKey] = useState('');
  const [userWalletName, setUserWalletName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [parsedPubKey, setParsedPubKey] = useState({ type: '', value: '' });

  useEffect(() => {
    if (isClient) {
      setUserAddress(localStorage.getItem(ADDRESS_KEY) ?? '');
      setUserPubKey(localStorage.getItem(PUBKEY_KEY) ?? '');
      setUserWalletName(localStorage.getItem(WALLET_NAME_KEY) ?? '');
      setLoggedIn(!!localStorage.getItem(ADDRESS_KEY));

      const initSettings: AtomState = {
        address: userAddress,
        pubKey: parsedPubKey,
        walletName: userWalletName,
        loggedIn: !!userAddress,
      };
      setUser(initSettings);
    }
  }, [setUser, userAddress, parsedPubKey, userWalletName, loggedIn]);

  useEffect(() => {
    if (isClient) {
      setParsedPubKey(userPubKey ? JSON.parse(userPubKey) : { type: '', value: '' });
    }
  }, [userPubKey]);
};
