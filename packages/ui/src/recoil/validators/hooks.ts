import { useState } from 'react';
import { useRecoilCallback } from 'recoil';
import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import { atomFamilyState as validatorAtomState } from '@/recoil/validators/atom';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles';
import { useValidatorAddressesQuery, ValidatorAddressesQuery } from '@/graphql/types/general_types';

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
          ?.filter((x) => x.validatorInfo)
          .forEach((x) => {
            const validatorAddress = x.validatorInfo?.operatorAddress ?? '';
            const delegatorAddress = x.validatorInfo?.selfDelegateAddress ?? '';
            const consensusAddress = x.validatorInfo?.consensusAddress ?? '';
            const imageUrl = x?.validatorDescriptions?.[0]?.avatarUrl ?? '';
            const moniker = x?.validatorDescriptions?.[0]?.moniker ?? '';

            set(validatorAtomState(consensusAddress), {
              delegator: delegatorAddress,
              validator: validatorAddress,
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
      const profilesPromises: Array<Promise<DesmosProfile | null>> = [];
      data?.validator
        ?.filter((x) => x.validatorInfo)
        .forEach((x) => {
          const delegatorAddress = x.validatorInfo?.selfDelegateAddress ?? '';
          profilesPromises.push(fetchDesmosProfile(delegatorAddress));
        });

      const profiles = await Promise.allSettled(profilesPromises);
      data?.validator
        ?.filter((x) => x.validatorInfo)
        .forEach((x, i) => {
          const delegatorAddress = x.validatorInfo?.selfDelegateAddress ?? '';
          const profile1 = profiles?.[i];
          if (!profile1 || profile1.status !== 'fulfilled') return;
          const profile = profile1.value;

          // ignore if profile doesnt exist
          if (profile) {
            // sets profile priority
            const moniker = profile.nickname || x?.validatorDescriptions?.[0]?.moniker || '';
            const imageUrl = profile.imageUrl || x?.validatorDescriptions?.[0]?.avatarUrl || '';

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
