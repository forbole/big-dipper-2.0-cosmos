/* eslint-disable max-len */
import { useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilCallback,
} from 'recoil';
import { chainConfig } from '@configs';
import {
  writeProfile,
  readProfilesExist,
  readProfileExist,
  readProfile,
  readProfiles,
  readDelegatorAddress,
  readDelegatorAddresses,
} from '@recoil/profiles';
import { AtomState as ProfileAtomState } from '@recoil/profiles/types';
import { getProfile } from './utils';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName | null => {
  const delegatorAddress = useRecoilValue(readDelegatorAddress(address));
  const rawProfile = useRecoilValue(readProfileExist(address));
  const profile = useRecoilValue(readProfile(address));

  const fetchProfile = useRecoilCallback(({ set }) => async () => {
    const fetchedProfile = await getProfile(delegatorAddress);

    if (fetchedProfile === null) {
      set(writeProfile(delegatorAddress), null);
    } else {
      set(writeProfile(delegatorAddress), {
        address: delegatorAddress,
        // name: fetchedProfile.nickname || address,
        name: `@${fetchedProfile.dtag}` || address,
        imageUrl: fetchedProfile.imageUrl,
      });
    }
  });

  useEffect(() => {
    if (chainConfig.extra.profile
      && delegatorAddress
      && rawProfile === null) {
      fetchProfile();
    }
  }, [address]);

  return profile;
};

/**
 * Accepts a list of addresses and returns the appropriate profiles
 * @param address
 */
export const useProfilesRecoil = (addresses: string[]): AvatarName[] => {
  const delegatorAddresses = useRecoilValue(readDelegatorAddresses(addresses));
  const rawProfiles: ProfileAtomState[] = useRecoilValue(readProfilesExist(addresses));
  const profiles = useRecoilValue(readProfiles(addresses));

  const fetchProfiles = useRecoilCallback(({ set }) => async () => {
    const fetchedProfiles = await Promise.all(rawProfiles.map(async (x, i) => {
      const delegatorAddress = delegatorAddresses[i];
      if (delegatorAddresses[i] && x === null) {
        const fetchedProfile = await getProfile(delegatorAddresses[i]);
        if (fetchedProfile === null) {
          set(writeProfile(delegatorAddress), null);
        } else {
          set(writeProfile(delegatorAddress), {
            address: delegatorAddress,
            // name: fetchedProfile.nickname || addresses[i],
            name: `@${fetchedProfile.dtag}` || addresses[i],
            imageUrl: fetchedProfile.imageUrl,
          });
        }
      }
    }));

    return fetchedProfiles;
  });

  useEffect(() => {
    if (chainConfig.extra.profile) {
      fetchProfiles();
    }
  }, []);

  return profiles;
};
