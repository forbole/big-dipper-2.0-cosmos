/* eslint-disable max-len */
import { useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  SetterOrUpdater,
} from 'recoil';
import { chainConfig } from '@configs';
import {
  writeProfile,
  readDelegatorAddress,
} from '@recoil/profiles';
import { AtomState } from '@recoil/profiles/types';
import { getProfile } from './utils';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string) => {
  const delegatorAddress = useRecoilValue(readDelegatorAddress(address));
  const [profile, setProfile] = useRecoilState(writeProfile(delegatorAddress)) as [AtomState, SetterOrUpdater<AtomState>];

  useEffect(() => {
    const getProfileEffect = async () => {
      const fetchedProfile: DesmosProfile = await getProfile(delegatorAddress);
      if (fetchedProfile === null) {
        setProfile(false);
      } else {
        setProfile({
          moniker: fetchedProfile.nickname,
          imageUrl: fetchedProfile.imageUrl,
        });
      }
    };

    if (chainConfig.extra.profile
      && delegatorAddress
      && profile === null) {
      getProfileEffect();
    }
  }, [address]);

  return ({
    profile: profile ?? ({
      moniker: address,
    }),
  });
};
