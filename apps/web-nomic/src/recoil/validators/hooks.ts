import chainConfig from '@/chainConfig';
import { useValidatorAddressesQuery } from '@/graphql/types/general_types';
import { useDesmosProfile } from '@/hooks';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { useEffect, useMemo } from 'react';
import { useRecoilCallback } from 'recoil';
import {
  atomFamilyState as validatorAtomState,
  AtomState as ValidatorAtomState,
} from 'ui/recoil/validators';

const { extra } = chainConfig();

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
        set(validatorAtomState(consensusAddress), newState)
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

  const addresses = useMemo(
    () => [
      ...new Set(
        data?.validator.filter((x) => x.selfDelegateAddress).map((x) => x.selfDelegateAddress)
      ),
    ],
    [data]
  );

  // ==========================
  // Desmos Profile
  // ==========================
  const { data: desmosProfiles, loading } = useDesmosProfile({ addresses, skip: !extra.profile });
  const setProfileAtomFamilyState = useRecoilCallback(
    ({ set }) =>
      (delegatorAddress: string, newState: ProfileAtomState) =>
        set(profileAtomFamilyState(delegatorAddress), newState)
  );

  const validatorMap = useMemo(
    () =>
      new Map(
        data?.validator.filter((x) => x.selfDelegateAddress).map((x) => [x.selfDelegateAddress, x])
      ),
    [data]
  );
  const profileMap = useMemo(
    () =>
      extra.profile
        ? new Map(
            desmosProfiles
              ?.flatMap((x) => x.connections.map<[string, DesmosProfile]>((p) => [p.identifier, x]))
              .filter((x) => x[0])
          )
        : new Map<string, DesmosProfile>(),
    [desmosProfiles]
  );

  useEffect(() => {
    if (!validatorMap.size) return;
    validatorMap.forEach((x, delegatorAddress) => {
      const profile = profileMap.get(delegatorAddress);

      // sets profile priority
      const moniker = profile?.nickname || x?.validatorDescriptions?.[0]?.moniker || '';
      const imageUrl = profile?.imageUrl || x?.validatorDescriptions?.[0]?.avatarUrl || '';

      setProfileAtomFamilyState(delegatorAddress, {
        moniker,
        imageUrl,
      });
    });
  }, [validatorMap, profileMap, setProfileAtomFamilyState]);

  return {
    loading: loading || loadingValidator,
  };
};
