import { useEffect, useState } from 'react';
import { useRecoilCallback } from 'recoil';
import * as R from 'ramda';
import { writeProfile } from '@/recoil/profiles/selectors';
import { useProviderCustomValidatorQuery } from '@/graphql/types/general_types';

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
 * Accepts provider operator address and returns the appropriate profile
 * @param validator - the provider operator address of the validator
 * @returns The return value is an object with the following properties:
 * name, address, imageUrl
 */
const useProviderCustomValidator = (validator: string): providerAddressProfileResult => {
  const { data, loading } = useProviderCustomValidatorQuery({
    variables: { providerAddress: validator },
  });
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
    if (data && data.ccv_validator.length > 0) {
      const validatorDescription =
        data.ccv_validator[0].ccv_validator_info?.validator.validatorDescriptions[0];
      const name = validatorDescription?.moniker ?? '';
      const imageUrl = validatorDescription?.avatar_url ?? '';
      const bio = validatorDescription?.details ?? '';
      const website = validatorDescription?.website ?? '';
      const address = data?.ccv_validator[0]?.consumer_operator_address;
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

export default useProviderCustomValidator;
