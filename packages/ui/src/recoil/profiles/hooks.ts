/* eslint-disable max-len */
import { useEffect } from 'react';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import chainConfig from 'ui/chainConfig';
import type { AtomState as ProfileAtomState } from './types';
import {
  writeProfile,
  readProfilesExist,
  readProfileExist,
  readProfile,
  readProfiles,
  readDelegatorAddress,
  readDelegatorAddresses,
} from './selectors';
import { getProfile } from './utils';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName => {
  const profile = useRecoilValue(readProfile(address));

  useEffect(() => {
    const rawProfile = useRecoilValue(readProfileExist(address));
    const delegatorAddress = useRecoilValue(readDelegatorAddress(address));
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

    if (chainConfig.extra.profile && delegatorAddress && rawProfile === null) {
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
  const profiles = useRecoilValue(readProfiles(addresses));

  useEffect(() => {
    const delegatorAddresses = useRecoilValue(readDelegatorAddresses(addresses));
    const rawProfiles: ProfileAtomState[] = useRecoilValue(readProfilesExist(addresses));
    const fetchProfiles = useRecoilCallback(({ set }) => async () => {
      const fetchedProfiles = await Promise.all(
        rawProfiles.map(async (x, i) => {
          const delegatorAddress = delegatorAddresses[i];
          if (delegatorAddress && x === null) {
            const fetchedProfile = await getProfile(delegatorAddress);
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
        })
      );

      return fetchedProfiles;
    });

    if (chainConfig.extra.profile) {
      fetchProfiles();
    }
  }, [addresses]);

  return profiles;
};
