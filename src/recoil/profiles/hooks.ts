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
  readProfileExist,
  readProfile,
  readDelegatorAddress,
  readDelegatorAddresses,
} from '@recoil/profiles';
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
  const [profiles, setProfiles] = useRecoilState(writeProfiles(delegatorAddresses)) as [AvatarName[], SetterOrUpdater<AvatarName[]>];

  const results: number[] = await Promise.all(arr.map(async (item): Promise<number> => {
    await callAsynchronousOperation(item);
    return item + 1;
  }));

  useEffect(() => {
    const fetchProfile = async () => {
      const fetchedProfiles = await Promise.all(profiles.map(async (x) => {
        // loop over the profiles
        // if (x === null) {

        // }
        // const fetchedProfile = await getProfile(x);
        // await callAsynchronousOperation(item);
        // return item + 1;
      }));

      const fetchedProfile = await getProfile(delegatorAddress);
      if (fetchedProfile === null) {
        setProfile(null);
      } else {
        setProfile({
          address: delegatorAddress,
          name: fetchedProfile.nickname,
          imageUrl: fetchedProfile.imageUrl,
        });
      }
    };

    if (chainConfig.extra.profile
      && delegatorAddress
      && profile === null) {
      fetchProfile();
    }
  }, []);

  return profile;
};
