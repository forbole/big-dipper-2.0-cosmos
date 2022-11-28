import chainConfig from '@/chainConfig';
import {
  readDelegatorAddress,
  readDelegatorAddresses,
  readProfile,
  readProfileExist,
  readProfiles,
  readProfilesExist,
  writeProfile,
} from '@/recoil/profiles/selectors';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { getProfile } from '@/recoil/profiles/utils';
import { useEffect } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName => {
  const profile = useRecoilValue(readProfile(address));

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

  useEffect(() => {
    if (chainConfig.extra.profile && delegatorAddress && rawProfile === null) {
      fetchProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return profile;
};

/**
 * Accepts a list of addresses and returns the appropriate profiles
 * @param address
 */
export const useProfilesRecoil = (addresses: string[]): AvatarName[] => {
  const profiles = useRecoilValue(readProfiles(addresses));

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

  useEffect(() => {
    if (chainConfig.extra.profile) {
      fetchProfiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  return profiles;
};
