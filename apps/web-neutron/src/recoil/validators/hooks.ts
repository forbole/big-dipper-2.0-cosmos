import { useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { AtomState as ValidatorAtomState } from 'ui/recoil/validators';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles/atom';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { atomFamilyState as validatorAtomState } from '@/recoil/validators/atom';
import { useValidatorAddressesQuery } from '@/graphql/types/provider_types';

export const useValidatorRecoil = () => {
  const { loading: loadingValidator, data } = useValidatorAddressesQuery();
  const setValidatorAtomState = useRecoilCallback(
    ({ set }) =>
      (consensusAddress: string, newState: ValidatorAtomState) =>
        set(validatorAtomState(consensusAddress), newState),
    []
  );
  useEffect(() => {
    if (!data?.ccv_validator) return;
    const map = new Map(
      data.ccv_validator
        .filter((x) => x.validator?.validatorInfo?.consensusAddress)
        .map((x) => [x.validator?.validatorInfo?.consensusAddress ?? '', x])
    );
    map.forEach((x, consensusAddress) => {
      setValidatorAtomState(consensusAddress, {
        delegator: x.validator?.validatorInfo?.selfDelegateAddress ?? '',
        validator: x.validator?.validatorInfo?.consensusAddress ?? '',
      });
    });
  }, [data, setValidatorAtomState]);

  const setProfileAtomFamilyState = useRecoilCallback(
    ({ set }) =>
      (delegatorAddress: string, newState: ProfileAtomState) =>
        set(
          profileAtomFamilyState(delegatorAddress),
          (prevState: ProfileAtomState): ProfileAtomState => {
            if (!prevState || prevState === true) return newState;
            return prevState.moniker ? prevState : newState;
          }
        ),
    []
  );

  useEffect(() => {
    data?.ccv_validator?.forEach((validator) => {
      if (!validator.validator?.validatorInfo?.selfDelegateAddress) return;

      setProfileAtomFamilyState(validator.validator?.validatorInfo?.selfDelegateAddress, {
        moniker: validator.validator?.validatorDescriptions?.[0]?.moniker || '',
        imageUrl: validator.validator?.validatorDescriptions?.[0]?.avatarUrl || '',
      });
    });
  }, [data?.ccv_validator, setProfileAtomFamilyState]);

  return {
    loading: loadingValidator,
  };
};
