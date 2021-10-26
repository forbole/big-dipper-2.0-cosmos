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
  writeProfiles,
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
  const [profile, setProfile] = useRecoilState(writeProfile(address)) as [AvatarName, SetterOrUpdater<AvatarName>];

  useEffect(() => {
    const fetchProfile = async () => {
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

/**
 * Accepts a list of addresses and returns the appropriate profiles
 * @param address
 */
export const useProfilesRecoil = (addresses: string[]): AvatarName => {
  const delegatorAddresses = useRecoilValue(readDelegatorAddresses(addresses));
  const [profiles, setProfiles] = useRecoilState(writeProfiles(delegatorAddresses)) as [AvatarName[], SetterOrUpdater<AvatarName[]>];

  useEffect(() => {
    const fetchProfile = async () => {
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
