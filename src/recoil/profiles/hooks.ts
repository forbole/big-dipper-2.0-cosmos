/* eslint-disable max-len */
import { useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  SetterOrUpdater,
  useRecoilCallback,
} from 'recoil';
import { chainConfig } from '@configs';
import {
  writeProfile,
  writeProfiles,
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
export const useProfileRecoil = (address: string): AvatarName => {
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
        name: fetchedProfile.nickname,
        imageUrl: fetchedProfile.imageUrl,
      });
    }
    // }
  });

  useEffect(() => {
    if (chainConfig.extra.profile
      && delegatorAddress
      && rawProfile === null) {
      fetchProfile();
    }
  }, []);

  return profile;
};

/**
 * Accepts a list of addresses and returns the appropriate profiles
 * @param address
 */
export const useProfilesRecoil = (addresses: string[]): AvatarName => {
  const delegatorAddresses = useRecoilValue(readDelegatorAddresses(addresses));
  const rawProfiles: ProfileAtomState[] = useRecoilValue(readProfilesExist(addresses));
  const profiles = useRecoilValue(readProfiles(addresses));
  // const [profiles, setProfiles] = useRecoilState(writeProfiles(delegatorAddresses)) as [AvatarName[], SetterOrUpdater<AvatarName[]>];

  // const results: number[] = await Promise.all(arr.map(async (item): Promise<number> => {
  //   await callAsynchronousOperation(item);
  //   return item + 1;
  // }));

  const fetchProfiles = useRecoilCallback(({ set }) => async () => {
    const fetchedProfile = await getProfile(delegatorAddress);
    if (fetchedProfile === null) {
      set(writeProfile(delegatorAddress), null);
    } else {
      set(writeProfile(delegatorAddress), {
        address: delegatorAddress,
        name: fetchedProfile.nickname,
        imageUrl: fetchedProfile.imageUrl,
      });
    }
    // }
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const fetchedProfiles = await Promise.all(rawProfiles.map(async (x, i) => {
        if (delegatorAddresses[i] && x === null) {
          const fetchedProfile = await getProfile(delegatorAddresses[i]);
          if (fetchedProfile === null) {
            set(writeProfile(delegatorAddress), null);
          } else {
            set(writeProfile(delegatorAddress), {
              address: delegatorAddress,
              name: fetchedProfile.nickname,
              imageUrl: fetchedProfile.imageUrl,
            });
          }
        }
      }));

      // const fetchedProfile = await getProfile(delegatorAddress);
      // if (fetchedProfile === null) {
      //   setProfile(null);
      // } else {
      //   setProfile({
      //     address: delegatorAddress,
      //     name: fetchedProfile.nickname,
      //     imageUrl: fetchedProfile.imageUrl,
      //   });
      // }
    };

    if (chainConfig.extra.profile) {
      fetchProfile();
    }
  }, []);

  return profile;
};
