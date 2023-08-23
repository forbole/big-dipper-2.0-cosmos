import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import { useValidatorDetailsQuery, ValidatorDetailsQuery } from '@/graphql/types/provider_types';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import { SlashingParams } from '@/models';
import { StatusType, ValidatorDetailsState } from '@/screens/validator_details/types';
import { formatToken } from '@/utils/format_token';
import { getValidatorCondition } from '@/utils/get_validator_condition';

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
    status: 0,
    jailed: false,
    tombstoned: false,
    condition: 0,
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

// ============================
// overview
// ============================
const formatOverview = (data: ValidatorDetailsQuery) => {
  const operatorAddress =
    data?.bdjuno_provider?.validator?.[0]?.validatorInfo?.operatorAddress ?? '';
  const selfDelegateAddress =
    data?.bdjuno_provider?.validator?.[0]?.validatorInfo?.selfDelegateAddress ?? '';
  const profile = {
    validator: operatorAddress,
    operatorAddress,
    selfDelegateAddress,
    description: data.bdjuno_provider?.validator[0]?.validatorDescriptions?.[0]?.details ?? '',
    website: data.bdjuno_provider?.validator[0]?.validatorDescriptions?.[0]?.website ?? '',
  };

  return profile;
};

// ============================
// status
// ============================
const formatStatus = (data: ValidatorDetailsQuery) => {
  const slashingParams = SlashingParams.fromJson(
    data?.bdjuno_provider?.slashingParams?.[0]?.params ?? {}
  );
  const missedBlockCounter =
    data.bdjuno_provider?.validator[0]?.validatorSigningInfos?.[0]?.missedBlocksCounter ?? 0;
  const { signedBlockWindow } = slashingParams;
  const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

  const profile: StatusType = {
    status: data.bdjuno_provider?.validator[0]?.validatorStatuses?.[0]?.status ?? 3,
    jailed: data.bdjuno_provider?.validator[0]?.validatorStatuses?.[0]?.jailed ?? false,
    tombstoned: data.bdjuno_provider?.validator[0]?.validatorSigningInfos?.[0]?.tombstoned ?? false,
    commission: data.bdjuno_provider?.validator[0]?.validatorCommissions?.[0]?.commission ?? 0,
    condition,
    missedBlockCounter,
    signedBlockWindow,
    maxRate: data?.bdjuno_provider?.validator?.[0]?.validatorInfo?.maxRate ?? '0',
  };

  return profile;
};

// ============================
// votingPower
// ============================
const formatVotingPower = (data: ValidatorDetailsQuery) => {
  const selfVotingPower =
    (data.bdjuno_provider?.validator[0]?.validatorVotingPowers?.[0]?.votingPower ?? 0) /
    10 ** (extra.votingPowerExponent ?? 0);

  const votingPower = {
    self: selfVotingPower,
    overall: formatToken(
      data?.bdjuno_provider?.stakingPool?.[0]?.bonded ?? 0,
      votingPowerTokenUnit
    ),
    height: data.bdjuno_provider?.validator[0]?.validatorVotingPowers?.[0]?.height ?? 0,
  };

  return votingPower;
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

function formatAccountQuery(data: ValidatorDetailsQuery): Partial<ValidatorDetailsState> {
  const stateChange: Partial<ValidatorDetailsState> = {};

  if (!data.bdjuno_provider?.validator.length) {
    stateChange.exists = false;
    return stateChange;
  }

  stateChange.overview = formatOverview(data);

  stateChange.status = formatStatus(data);
  stateChange.votingPower = formatVotingPower(data);

  return stateChange;
}
