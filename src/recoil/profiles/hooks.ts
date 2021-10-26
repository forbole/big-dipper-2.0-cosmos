/* eslint-disable max-len */
import { useEffect } from 'react';
import * as R from 'ramda';
import {
  useRecoilState,
  useRecoilValue,
  SetterOrUpdater,
} from 'recoil';
import { chainConfig } from '@configs';
import {
  writeProfile,
  readDelegatorAddress,
  readDelegatorAddresses,
} from '@recoil/profiles';
import {
  Profile, AtomState,
} from '@recoil/profiles/types';
import { getProfile } from './utils';

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName => {
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

  const name = R.pathOr(address, ['moniker'], profile) as string;
  const imageUrl = R.pathOr('', ['imageUrl'], profile);

  return ({
    name,
    address,
    imageUrl,
  });
};

/**
 * Accepts a list of address and returns the appropriate profile
 * @param address
 */
export const useProfilesRecoil = (addresses: string[]): Profile => {
  const delegatorAddress = useRecoilValue(readDelegatorAddresses(addresses));
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

  return profile || ({
    moniker: address,
  });
};
