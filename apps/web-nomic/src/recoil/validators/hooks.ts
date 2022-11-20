import { useState } from 'react';
import { useRecoilCallback } from 'recoil';
import * as R from 'ramda';
import { QueryHookOptions, QueryResult } from '@apollo/client';
import chainConfig from 'ui/chainConfig';
import { useDesmosProfile } from 'ui/hooks';
import { atomFamilyState as profileAtomFamilyState } from 'ui/recoil/profiles';
import { atomFamilyState as validatorAtomState } from 'ui/recoil/validators';

export type UseValidatorAddressesQuery<TData, TVariables> = (
  baseOptions?: QueryHookOptions<TData, TVariables>
) => QueryResult<TData, TVariables>;

export type DataType = {
  validator?: Array<{
    consensusAddress: string;
    operatorAddress: string;
    selfDelegateAddress: string;
  }>;
};

export const useValidatorRecoil = <TData, TVariables>(
  useValidatorAddressesQuery: UseValidatorAddressesQuery<TData, TVariables>
) => {
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

  const formatAndSetValidatorsAddressList = useRecoilCallback(({ set }) => async (data: TData) => {
    (data as DataType)?.validator
      ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
      .forEach((x: any) => {
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
  });

  const setProfiles = useRecoilCallback(({ set }) => async (data: TData) => {
    if (chainConfig.extra.profile) {
      let profiles: any[] = [];
      (data as DataType)?.validator
        ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
        .forEach((x: any) => {
          const delegatorAddress = x.selfDelegateAddress;
          profiles.push(fetchDesmosProfile(delegatorAddress));
        });

      profiles = await Promise.allSettled(profiles);
      (data as DataType)?.validator
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
