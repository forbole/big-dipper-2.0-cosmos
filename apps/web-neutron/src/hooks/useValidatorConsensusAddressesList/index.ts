import { useEffect, useState } from 'react';
import { useRecoilCallback } from 'recoil';
import * as R from 'ramda';
import { writeProfile } from '@/recoil/profiles/selectors';
import { useValidatorConsensusAddressesListQuery } from '@/graphql/types/provider_types';

type Profile = {
  name: string;
  address: string;
  imageUrl: string;
  bio: string;
  website: string;
};

interface providerAddressProfileResult {
  profile: Profile | undefined;
  loading: boolean;
}

/**
 * Accepts validator consensus address and returns the appropriate profile
 * @param validator - the consumer consensus address of the validator
 * @returns The return value is an object with the following properties:
 * name, address, imageUrl
 */
const useValidatorConsensusAddressesList = (validator: string): providerAddressProfileResult => {
  const { data, loading } = useValidatorConsensusAddressesListQuery({
    variables: { address: validator },
  });
  const [profile, setProfile] = useState<Profile>();
  const setAvatarName = useRecoilCallback(
    ({ set }) => (address: string, avatarName: AvatarName | null) =>
      set(writeProfile(address), prevState =>
        R.equals(prevState, avatarName) ? prevState : avatarName
      ),
    []
  );
  useEffect(() => {
    if (data && data?.ccv_validator?.length > 0) {
      const validatorDescription = data?.ccv_validator[0]?.validator?.validator_descriptions[0];
      const name = validatorDescription?.moniker ?? '';
      const imageUrl = validatorDescription?.avatar_url ?? '';
      const bio = validatorDescription?.details ?? '';
      const website = validatorDescription?.website ?? '';
      const address = data.ccv_validator[0]?.consumer_operator_address;
      const res: Profile = {
        name,
        address,
        imageUrl,
        bio,
        website,
      };
      setProfile(res);
      setAvatarName(address, res);
    }
  }, [data, loading, setAvatarName, validator]);
  return { profile, loading };
};

export default useValidatorConsensusAddressesList;
