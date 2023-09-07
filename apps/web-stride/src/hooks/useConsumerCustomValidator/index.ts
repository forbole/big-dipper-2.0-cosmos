import { useEffect, useState } from 'react';
import { useRecoilCallback } from 'recoil';
import * as R from 'ramda';
import { writeProfile } from '@/recoil/profiles/selectors';
import { useConsumerCustomValidatorQuery } from '@/graphql/types/general_types';

type Profile = {
  name: string;
  address: string;
  imageUrl: string;
  bio: string;
  website: string;
};

interface consumerAddressProfileResult {
  profile: Profile | undefined;
  loading: boolean;
}

/**
 * Accepts consumerAddress address and returns the appropriate profile
 * @param validator - the consumer operator address of the validator
 * @returns The return value is an object with the following properties:
 * name, address, imageUrl
 */
const useConsumerCustomValidator = (validator: string): consumerAddressProfileResult => {
  const { data, loading } = useConsumerCustomValidatorQuery({
    variables: { consumerAddress: validator },
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
    if (data && data.validatorInfo.length > 0) {
      const validatorDescription = data.validatorInfo[0].validator.validatorDescriptions[0];
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
      };
      setProfile(res);
      setAvatarName(address, res);
    }
  }, [data, loading, setAvatarName, validator]);

  return { profile, loading };
};

export default useConsumerCustomValidator;
