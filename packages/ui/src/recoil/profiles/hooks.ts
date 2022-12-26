import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
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
import { useEffect } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const { extra } = chainConfig();

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName => {
  const profile = useRecoilValue(readProfile(address));
  const rawProfile = useRecoilValue(readProfileExist(address));
  const delegatorAddress = useRecoilValue(readDelegatorAddress(address));
  const setAvatarName = useRecoilCallback(
    ({ set }) =>
      (theAddress: string, avatarName: AvatarName | null) =>
        set(writeProfile(theAddress), avatarName)
  );
  const filteredAddress = rawProfile ? null : delegatorAddress;

  // ==========================
  // Desmos Profile
  // ==========================
  const { data } = useDesmosProfile({
    addresses: [filteredAddress ?? ''],
    skip: !extra.profile || !filteredAddress,
  });

  useEffect(() => {
    if (!filteredAddress) return;
    const fetchedProfile = data?.[0];
    if (!fetchedProfile) {
      setAvatarName(filteredAddress, null);
    } else {
      setAvatarName(filteredAddress, {
        address: filteredAddress,
        // name: fetchedProfile.nickname || address,
        name: fetchedProfile?.dtag ? `@${fetchedProfile.dtag}` : address,
        imageUrl: fetchedProfile?.imageUrl,
      });
    }
  }, [filteredAddress, data, setAvatarName, address]);

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
  const setAvatarName = useRecoilCallback(
    ({ set }) =>
      (address: string, avatarName: AvatarName | null) =>
        set(writeProfile(address), avatarName)
  );
  const filteredAddresses = delegatorAddresses.filter((x, i) => x && !rawProfiles[i]);

  // ==========================
  // Desmos Profile
  // ==========================
  const { data } = useDesmosProfile({
    addresses: filteredAddresses,
    skip: !extra.profile,
  });

  useEffect(() => {
    const profileMap = new Map(
      filteredAddresses.map((address) => {
        const profile = data?.find((x) => x.connections.some((c) => c.identifier === address));
        return [address, profile];
      })
    );
    filteredAddresses.forEach((delegatorAddress, i) => {
      const fetchedProfile = profileMap.get(delegatorAddress);
      if (!fetchedProfile) {
        setAvatarName(delegatorAddress, null);
      } else {
        setAvatarName(delegatorAddress, {
          address: delegatorAddress,
          // name: fetchedProfile.nickname || addresses[i],
          name: `@${fetchedProfile.dtag}` || addresses[i],
          imageUrl: fetchedProfile.imageUrl,
        });
      }
    });
  }, [filteredAddresses, data, setAvatarName, addresses]);

  return profiles;
};
