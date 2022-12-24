import chainConfig from '@/chainConfig';
import { useValidatorAddressesQuery } from '@/graphql/types/general_types';
import { useDesmosProfile } from '@/hooks';
import { atomFamilyState as profileAtomFamilyState } from '@/recoil/profiles';
import type { AtomState as ProfileAtomState } from '@/recoil/profiles/types';
import { atomFamilyState as validatorAtomState } from '@/recoil/validators/atom';
import { useEffect, useMemo } from 'react';
import { useRecoilCallback } from 'recoil';
import { AtomState as ValidatorAtomState } from 'ui/recoil/validators';

const { extra } = chainConfig();

export const useValidatorRecoil = () => {
  const { loading: loadingValidator, data } = useValidatorAddressesQuery();
  const setValidatorAtomState = useRecoilCallback(
    ({ set }) =>
      (consensusAddress: string, newState: ValidatorAtomState) =>
        set(validatorAtomState(consensusAddress), newState)
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

  const addresses = useMemo(
    () => [
      ...new Set(
        data?.validator
          .filter((x) => x.validatorInfo?.selfDelegateAddress)
          .map((x) => x.validatorInfo?.selfDelegateAddress ?? '')
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

  useEffect(() => {
    if (!extra.profile || !data || !desmosProfiles) return;
    const validatorMap = new Map(
      data.validator
        .filter((x) => x.validatorInfo?.selfDelegateAddress)
        .map((x) => [x.validatorInfo?.selfDelegateAddress ?? '', x])
    );
    const profileMap = new Map(desmosProfiles.filter((x) => x.address).map((x) => [x.address, x]));
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
  }, [data, desmosProfiles, setProfileAtomFamilyState]);

  return {
    loading: loading || loadingValidator,
  };
};
