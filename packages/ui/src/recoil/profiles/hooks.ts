import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import {
  readDelegatorAddress,
  readDelegatorAddresses,
  readProfile,
  readProfiles,
} from '@/recoil/profiles/selectors';
import { useRecoilValue } from 'recoil';

const { extra } = chainConfig();

/**
 * Accepts a delegator address and returns the appropriate profile
 * @param address
 */
export const useProfileRecoil = (address: string): AvatarName => {
  const profiles = useRecoilValue(readProfile(address));
  const delegatorAddress = useRecoilValue(readDelegatorAddress(address));

  // ==========================
  // Desmos Profile
  // ==========================
  useDesmosProfile({
    addresses: delegatorAddress ? [delegatorAddress] : [],
    skip: !extra.profile || !delegatorAddress,
  });

  return profiles;
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

  // ==========================
  // Desmos Profile
  // ==========================
  const { loading, error } = useDesmosProfile({
    addresses: delegatorAddresses,
    skip: !extra.profile || !delegatorAddresses.length,
  });

  return { profiles, loading, error };
};
