import { useEffect, useState } from 'react';
import { useRecoilCallback } from 'recoil';
import * as R from 'ramda';
import { writeProfile } from '@/recoil/profiles/selectors';
import { useCustomValidatorQuery } from '@/graphql/types/general_types';

type Profile = {
  name: string;
  address: string;
  imageUrl: string;
  bio: string;
  website: string;
  consensusAddress: string;
};

interface ConsensusProfileResult {
  profile: Profile | undefined;
  loading: boolean;
}

/**
 * Accepts consensus address and returns the appropriate profile
 * @param consensus - the consensus address of the validator
 * @param validator - the operator address of the validator
 * @returns The return value is an object with the following properties:
 * name, address, imageUrl
 */
const useConsensusProfile = (consensus: string, validator: string): ConsensusProfileResult => {
  const { data, loading } = useCustomValidatorQuery({ variables: { consensusAddress: consensus } });
  const [profile, setProfile] = useState<Profile>();
  const setAvatarName = useRecoilCallback(
    ({ set }) =>
      (address: string, avatarName: AvatarName | null) =>
        set(writeProfile(address), (prevState) =>
          R.equals(prevState, avatarName) ? prevState : avatarName
        ),
    []
  );
  useEffect(() => {
    if (data && data.validatorDescriptions.length > 0) {
      const validatorDescription = data.validatorDescriptions[0];
      const consensusAddress = validatorDescription.validator_address ?? '';
      const name = validatorDescription.moniker ?? '';
      const imageUrl = validatorDescription.avatar_url ?? '';
      const bio = validatorDescription.details ?? '';
      const website = validatorDescription.website ?? '';
      const address = validator;
      const res: Profile = {
        name,
        address,
        imageUrl,
        bio,
        website,
        consensusAddress,
      };
      setProfile(res);
      setAvatarName(address, res);
    }
  }, [data, loading, setAvatarName, validator]);

  return { profile, loading };
};

export default useConsensusProfile;
