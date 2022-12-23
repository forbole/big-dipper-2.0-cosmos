import chainConfig from '@/chainConfig';
import { useValidatorAddressesQuery, ValidatorAddressesQuery } from '@/graphql/types/general_types';
import { useDesmosProfile } from '@/hooks';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles';
import { useState } from 'react';
import { useRecoilCallback } from 'recoil';
import { atomFamilyState as validatorAtomState } from 'ui/recoil/validators';

const { extra } = chainConfig();

export interface DataType {
  validator?: Array<{
    consensusAddress: string;
    operatorAddress: string;
    selfDelegateAddress: string;
  }>;
}

export const useValidatorRecoil = () => {
  const [loading, setLoading] = useState(true);

  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => formatDesmosProfile(data),
  });

  useValidatorAddressesQuery({
    onError: (error) => {
      console.error((error as Error).message);
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
            const imageUrl = x?.validatorDescriptions?.[0]?.avatarUrl ?? '';
            const moniker = x?.validatorDescriptions?.[0]?.moniker ?? '';

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
    if (extra.profile) {
      const profilesPromises: Array<Promise<DesmosProfile | null>> = [];
      data?.validator
        ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
        .forEach((x) => {
          const delegatorAddress = x.selfDelegateAddress;
          profilesPromises.push(fetchDesmosProfile(delegatorAddress));
        });

      const profiles = await Promise.allSettled(profilesPromises);
      data?.validator
        ?.filter((x) => x.consensusAddress || x.selfDelegateAddress)
        .forEach((x, i) => {
          const delegatorAddress = x.selfDelegateAddress ?? '';
          const profile1 = profiles?.[i];
          if (!profile1 || profile1.status !== 'fulfilled') return;
          const profile = profile1?.value;

          // ignore if profile doesnt exist
          if (profile) {
            // sets profile priority
            const moniker = profile?.nickname || x?.validatorDescriptions?.[0]?.moniker || '';
            const imageUrl = profile?.imageUrl || x?.validatorDescriptions?.[0]?.avatarUrl || '';

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
