import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import {
  useValidatorVotingPowersQuery,
  ValidatorVotingPowersQuery,
  useValidatorInfoQuery,
  ValidatorInfoQuery,
  ValidatorAddressQuery,
  useValidatorAddressQuery,
} from '@/graphql/types/general_types';
import { useDesmosProfile } from '@/hooks/use_desmos_profile';
import { SlashingParams } from '@/models';
import {
  StatusType,
  ValidatorVPState,
  ValidatorProfileState,
  ValidatorOverviewState,
} from '@/screens/validator_details/types';
import { formatToken } from '@/utils/format_token';
import { getValidatorCondition } from '@/utils/get_validator_condition';

const { extra, votingPowerTokenUnit } = chainConfig();

const initialTokenDenom: TokenUnit = {
  value: '0',
  displayDenom: '',
  baseDenom: '',
  exponent: 0,
};

const initialVotingPowerState: ValidatorVPState = {
  validatorVPExists: true,
  votingPower: {
    height: 0,
    overall: initialTokenDenom,
    self: 0,
    validatorStatus: 0,
  },
};

const initialValidatorOverviewState: ValidatorOverviewState = {
  exists: true,
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
};

const initialValidatorProfileState: ValidatorProfileState = {
  exists: true,
  desmosProfile: null,
  operatorAddress: '',
  selfDelegateAddress: '',
};

export const useValidatorVotingPowerDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ValidatorVPState>(initialVotingPowerState);

  const handleSetState = useCallback(
    (stateChange: (prevState: ValidatorVPState) => ValidatorVPState) => {
      setState(prevState => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ==========================
  // Fetch Data
  // ==========================
  const { loading } = useValidatorVotingPowersQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: data => {
      handleSetState(prevState => ({ ...prevState, ...formatValidatorVotingPower(data) }));
    },
  });

  return { state, loading };
};

export const useValidatorOverviewDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ValidatorOverviewState>(initialValidatorOverviewState);

  const handleSetState = useCallback(
    (stateChange: (prevState: ValidatorOverviewState) => ValidatorOverviewState) => {
      setState(prevState => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ==========================
  // Fetch Data
  // ==========================
  const { loading } = useValidatorInfoQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: data => {
      handleSetState(prevState => ({ ...prevState, ...formatValidatorOverview(data) }));
    },
  });

  return { state, loading };
};

export const useValidatorProfileDetails = () => {
  const [state, setState] = useState<ValidatorProfileState>(initialValidatorProfileState);
  const router = useRouter();

  const handleSetState = useCallback(
    (stateChange: (prevState: ValidatorProfileState) => ValidatorProfileState) => {
      setState(prevState => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ==========================
  // Fetch Data
  // ==========================
  const { loading } = useValidatorAddressQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: data => {
      handleSetState(prevState => ({ ...prevState, ...formatValidatorAddress(data) }));
    },
  });

  // ==========================
  // Desmos Profile
  // ==========================
  const { data: dataDesmosProfile, loading: loadingDesmosProfile } = useDesmosProfile({
    addresses: [state.selfDelegateAddress],
    skip: !extra.profile || !state.selfDelegateAddress,
  });
  useEffect(
    () =>
      setState(prevState => ({
        ...prevState,
        desmosProfile: dataDesmosProfile?.[0],
        loading: loadingDesmosProfile,
      })),
    [dataDesmosProfile, loadingDesmosProfile]
  );
  return { state, loading };
};

function formatValidatorAddress(data: ValidatorAddressQuery): Partial<ValidatorProfileState> {
  const stateChange: Partial<ValidatorProfileState> = {};
  if (!data.validator.length) {
    stateChange.exists = false;
    return stateChange;
  }

  const operatorAddress = data?.validator?.[0]?.validatorInfo?.operatorAddress ?? '';
  const selfDelegateAddress = data?.validator?.[0]?.validatorInfo?.selfDelegateAddress ?? '';

  stateChange.operatorAddress = operatorAddress;
  stateChange.selfDelegateAddress = selfDelegateAddress;
  return stateChange;
}

function formatValidatorVotingPower(data: ValidatorVotingPowersQuery): Partial<ValidatorVPState> {
  const stateChange: Partial<ValidatorVPState> = {};
  if (!data.validator.length) {
    stateChange.validatorVPExists = false;
    return stateChange;
  }

  const selfVotingPower =
    (data.validator[0]?.validatorVotingPowers?.[0]?.votingPower ?? 0) /
    10 ** (extra.votingPowerExponent ?? 0);

  const votingPower = {
    self: selfVotingPower,
    overall: formatToken(data?.stakingPool?.[0]?.bonded ?? 0, votingPowerTokenUnit),
    height: data.validator[0]?.validatorVotingPowers?.[0]?.height ?? 0,
    validatorStatus: data.validator[0]?.validatorStatuses[0]?.status,
  };

  stateChange.votingPower = votingPower;
  stateChange.validatorVPExists = true;

  return stateChange;
}

function formatValidatorOverview(data: ValidatorInfoQuery): Partial<ValidatorOverviewState> {
  const stateChange: Partial<ValidatorOverviewState> = {};
  if (!data.validator.length) {
    stateChange.exists = false;
    return stateChange;
  }

  const operatorAddress = data?.validator?.[0]?.validatorInfo?.operatorAddress ?? '';
  const selfDelegateAddress = data?.validator?.[0]?.validatorInfo?.selfDelegateAddress ?? '';
  const overview = {
    validator: operatorAddress,
    operatorAddress,
    selfDelegateAddress,
    description: data.validator[0]?.validatorDescriptions?.[0]?.details ?? '',
    website: data.validator[0]?.validatorDescriptions?.[0]?.website ?? '',
  };

  const slashingParams = SlashingParams.fromJson(data?.slashingParams?.[0]?.params ?? {});
  const missedBlockCounter =
    data.validator[0]?.validatorSigningInfos?.[0]?.missedBlocksCounter ?? 0;
  const { signedBlockWindow } = slashingParams;
  const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

  const status: StatusType = {
    status: data.validator[0]?.validatorStatuses?.[0]?.status ?? 3,
    jailed: data.validator[0]?.validatorStatuses?.[0]?.jailed ?? false,
    tombstoned: data.validator[0]?.validatorSigningInfos?.[0]?.tombstoned ?? false,
    commission: data.validator[0]?.validatorCommissions?.[0]?.commission ?? 0,
    condition,
    missedBlockCounter,
    signedBlockWindow,
    maxRate: data?.validator?.[0]?.validatorInfo?.maxRate ?? '0',
  };

  stateChange.exists = true;
  stateChange.overview = overview;
  stateChange.status = status;
  return stateChange;
}
