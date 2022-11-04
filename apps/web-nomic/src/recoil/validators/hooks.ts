/* eslint-disable max-len */
import { useState } from 'react';
import { useRecoilCallback } from 'recoil';
import * as R from 'ramda';
import { useValidatorAddressesQuery, ValidatorAddressesQuery } from '@graphql/types/general_types';
import chainConfig from 'ui/dist/chainConfig';
import { useDesmosProfile } from '@hooks';
import { atomFamilyState as validatorAtomState } from '@recoil/validators';
import { atomFamilyState as profileAtomFamilyState } from '@recoil/profiles';

export const useValidatorRecoil = () => {
  const [loading, setLoading] = useState(true);

  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      return formatDesmosProfile(data);
    },
  });

  useValidatorAddressesQuery({
    onError: (error) => {
      console.error(error.message);
      setLoading(false);
    },
    onCompleted: async (data) => {
      // Not very optimized but better than before.
      // We save the very basic validator info first
      // Set loading to be false
      // Set profiles and update if needed.
      // Will come back to this in the future
      setLoading(false);
      formatAndSetValidatorsAddressList(data);
      setProfiles(data);
    },
  });

  const formatAndSetValidatorsAddressList = useRecoilCallback(
    ({ set }) =>
      async (data: ValidatorAddressesQuery) => {
        data?.validator
          ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
          .forEach((x) => {
            // const validatorAddress = x.validatorInfo.operatorAddress;
            const delegatorAddress = x.selfDelegateAddress;
            const { consensusAddress } = x;
            const imageUrl = R.pathOr('', ['validatorDescriptions', 0, 'avatarUrl'], x);
            const moniker = R.pathOr('', ['validatorDescriptions', 0, 'moniker'], x);

            set(validatorAtomState(consensusAddress), {
              delegator: delegatorAddress,
              validator: consensusAddress, // need to check which address should be used to replace
            });

            set(profileAtomFamilyState(delegatorAddress), {
              moniker,
              imageUrl,
            });
          });
      }
  );

  const setProfiles = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    if (chainConfig.extra.profile) {
      let profiles = [];
      data?.validator
        ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
        .forEach((x) => {
          const delegatorAddress = x.selfDelegateAddress;
          profiles.push(fetchDesmosProfile(delegatorAddress));
        });

      profiles = await Promise.allSettled(profiles);
      data?.validator
        ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
        .forEach((x, i) => {
          const delegatorAddress = x.selfDelegateAddress;
          const profile = R.pathOr(undefined, [i, 'value'], profiles);

          // ignore if profile doesnt exist
          if (profile) {
            // sets profile priority
            const moniker =
              R.pathOr(undefined, ['nickname'], profile) ||
              R.pathOr('', ['validatorDescriptions', 0, 'moniker'], x);
            const imageUrl =
              R.pathOr('', ['imageUrl'], profile) ||
              R.pathOr('', ['validatorDescriptions', 0, 'avatarUrl'], x);

            set(profileAtomFamilyState(delegatorAddress), {
              moniker,
              imageUrl,
            });
          }
        });
    }
  });

  return {
    loading,
  };
};
