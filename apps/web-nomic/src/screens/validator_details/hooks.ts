import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import { useValidatorDetailsQuery, ValidatorDetailsQuery } from '@/graphql/types/general_types';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import type { ValidatorDetailsState } from '@/screens/validator_details/types';
import { formatToken } from '@/utils/format_token';

const { extra, votingPowerTokenUnit } = chainConfig();

const initialTokenDenom: TokenUnit = {
  value: '0',
  displayDenom: '',
  baseDenom: '',
  exponent: 0,
};

const initialState: ValidatorDetailsState = {
  exists: true,
  desmosProfile: null,
  overview: {
    validator: '',
    operatorAddress: '',
    selfDelegateAddress: '',
    description: '',
    website: '',
  },
  status: {
    inActiveSet: 'false',
    jailed: 'false',
    tombstoned: 'false',
    commission: 0,
    missedBlockCounter: 0,
    signedBlockWindow: 0,
    maxRate: '0',
  },
  votingPower: {
    height: 0,
    overall: initialTokenDenom,
    self: 0,
  },
};

export const useValidatorDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ValidatorDetailsState>(initialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: ValidatorDetailsState) => ValidatorDetailsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ==========================
  // Fetch Data
  // ==========================
  const { loading } = useValidatorDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState((prevState) => ({ ...prevState, ...formatAccountQuery(data) }));
    },
  });

  // ==========================
  // Desmos Profile
  // ==========================
  const { data: dataDesmosProfile, loading: loadingDesmosProfile } = useDesmosProfile({
    addresses: [state.overview.selfDelegateAddress],
    skip: !extra.profile || !state.overview.selfDelegateAddress,
  });
  useEffect(
    () => setState((prevState) => ({ ...prevState, desmosProfile: dataDesmosProfile?.[0] })),
    [dataDesmosProfile]
  );

  return { state, loading: loading || loadingDesmosProfile };
};

// ============================
// overview
// ============================
const formatOverview = (data: ValidatorDetailsQuery) => {
  // const operatorAddress = data?.validator?.[0]?.validatorInfo?.operatorAddress ?? '';
  const operatorAddress = '';
  // const selfDelegateAddress = data?.validator?.[0]?.validatorInfo?.selfDelegateAddress ?? '';
  const selfDelegateAddress = '';
  const profile = {
    validator: operatorAddress,
    operatorAddress,
    selfDelegateAddress,
    description: data.validator[0]?.validatorDescriptions?.[0]?.details ?? '',
    // website: data.validator[0]?.validatorDescriptions?.[0]?.website ?? '',
    website: '',
  };

  return profile;
};

// ============================
// status
// ============================
const formatStatus = (data: ValidatorDetailsQuery) => {
  const profile = {
    inActiveSet: data.validator[0]?.validatorStatuses?.in_active_set ?? 'false',
    jailed: data.validator[0]?.validatorStatuses?.jailed ?? 'false',
    // tombstoned: data.validator[0]?.validatorSigningInfos?.[0]?.tombstoned
    tombstoned: 'false',
    commission: parseFloat(data.validator[0]?.validatorCommissions?.[0]?.commission) ?? 0,
    // maxRate: data?.validator?.[0]?.validatorInfo?.maxRate ?? '0',
    signedBlockWindow: 0,
    missedBlockCounter: 0,
    maxRate: '0',
  };

  return profile;
};
// ============================
// votingPower
// ============================
const formatVotingPower = (data: ValidatorDetailsQuery) => {
  const selfVotingPower =
    (data.validator[0]?.validatorVotingPowers?.[0]?.votingPower ?? 0) /
    10 ** (extra.votingPowerExponent ?? 0);

  const votingPower = {
    self: selfVotingPower,
    overall: formatToken(data?.stakingPool?.[0]?.bonded ?? 0, votingPowerTokenUnit),
    height: data.validator[0]?.validatorVotingPowers?.[0]?.height ?? 0,
  };

  return votingPower;
};

function formatAccountQuery(data: ValidatorDetailsQuery) {
  const stateChange: Partial<ValidatorDetailsState> = {};

  if (!data.validator.length) {
    stateChange.exists = false;
    return stateChange;
  }

  stateChange.overview = formatOverview(data);
  stateChange.status = formatStatus(data);
  stateChange.votingPower = formatVotingPower(data);

  return stateChange;
}
