import { useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { AtomState as ValidatorAtomState } from 'ui/recoil/validators';
import { useValidatorAddressesQuery } from '@/graphql/types/general_types';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles/atom';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { atomFamilyState as validatorAtomState } from '@/recoil/validators/atom';

export const useValidatorRecoil = () => {
  const { loading: loadingValidator, data } = useValidatorAddressesQuery();
  const setValidatorAtomState = useRecoilCallback(
    ({ set }) =>
      (consensusAddress: string, newState: ValidatorAtomState) =>
        set(validatorAtomState(consensusAddress), newState),
    []
  );
  useEffect(() => {
    if (!data?.validator) return;
    const map = new Map(
      data.validator
        .filter((x) => x.validatorInfo?.consensusAddress)
        .map((x) => [x.validatorInfo?.consensusAddress ?? '', x])
    );
    map.forEach((x, consensusAddress) => {
      setValidatorAtomState(consensusAddress, {
        delegator: x.validatorInfo?.selfDelegateAddress ?? '',
        validator: x.validatorInfo?.consensusAddress ?? '',
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
    data?.validator?.forEach((validator) => {
      if (!validator.validatorInfo?.selfDelegateAddress) return;

      setProfileAtomFamilyState(validator.validatorInfo?.selfDelegateAddress, {
        moniker: validator.validatorDescriptions?.[0]?.moniker || '',
        imageUrl: validator.validatorDescriptions?.[0]?.avatarUrl || '',
      });
    });
  }, [data?.validator, setProfileAtomFamilyState]);

  return {
    loading: loadingValidator,
  };
};
