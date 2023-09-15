import { useRecoilValue } from 'recoil';
import chainConfig from '@/chainConfig';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import {
  readDelegatorAddress,
  readDelegatorAddresses,
  readProfile,
  readProfiles,
} from '@/recoil/profiles/selectors';

const { extra } = chainConfig();

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName => {
  const profile = useRecoilValue(readProfile(address));
  const delegatorAddress = useRecoilValue(readDelegatorAddress(address));

  // ==========================
  // Desmos Profile
  // ==========================
  useDesmosProfile({
    addresses: delegatorAddress ? [delegatorAddress] : [],
    skip: !extra.profile || !delegatorAddress,
  });

  return profile;
};

/**
 * Accepts a list of addresses and returns the appropriate profiles
 * @param address
 */
export const useProfilesRecoil = (
  addresses: string[]
): { profiles: AvatarName[]; loading: boolean; error: unknown } => {
  const profiles = useRecoilValue(readProfiles(addresses));
  const delegatorAddresses = useRecoilValue(readDelegatorAddresses(addresses));
  const delegatorAddressMemo = useShallowMemo(delegatorAddresses);

  // ==========================
  // Desmos Profile
  // ==========================
  const { loading, error } = useDesmosProfile({
    addresses: delegatorAddressMemo,
    skip: !extra.profile || !delegatorAddressMemo.length,
  });

  return { profiles, loading, error };
};
