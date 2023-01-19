import { useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { atomFamilyState as validatorAtomState } from 'ui/recoil/validators/atom';
import type { AtomState as ValidatorAtomState } from 'ui/recoil/validators/types';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles/atom';
import { useValidatorAddressesQuery } from '@/graphql/types/general_types';

export interface DataType {
  validator?: Array<{
    consensusAddress: string;
    operatorAddress: string;
    selfDelegateAddress: string;
  }>;
}

export const useValidatorRecoil = () => {
  const { data, loading: loadingValidator } = useValidatorAddressesQuery();
  const setValidatorAtomState = useRecoilCallback(
    ({ set }) =>
      (consensusAddress: string, newState: ValidatorAtomState) =>
        set(validatorAtomState(consensusAddress), newState),
    []
  );
  useEffect(() => {
    if (!data?.validator) return;
    const map = new Map(
      data.validator.filter((x) => x.consensusAddress).map((x) => [x.consensusAddress, x])
    );
    map.forEach((x, consensusAddress) => {
      setValidatorAtomState(consensusAddress, {
        delegator: x.selfDelegateAddress,
        validator: x.consensusAddress,
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
        )
  );

  useEffect(() => {
    data?.validator?.forEach((validator) => {
      if (!validator?.selfDelegateAddress) return;

      setProfileAtomFamilyState(validator.selfDelegateAddress, {
        moniker: validator.validatorDescriptions?.[0]?.moniker || '',
        imageUrl: validator.validatorDescriptions?.[0]?.avatarUrl || '',
      });
    });
  }, [data, setProfileAtomFamilyState]);

  return {
    loading: loadingValidator,
  };
};
