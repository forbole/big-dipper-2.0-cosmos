import chainConfig from '@/chainConfig';
import { useValidatorDetailsQuery, ValidatorDetailsQuery } from '@/graphql/types/general_types';
import { useDesmosProfile } from '@/hooks';
import { validatorToDelegatorAddress } from '@/recoil/profiles';
import type { ValidatorDetailsState } from '@/screens/validator_details/types';
import { formatToken } from '@/utils/format_token';
import { isValidAddress } from '@/utils/prefix_convert';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

const { extra, votingPowerTokenUnit } = chainConfig();

const initialTokenDenom: TokenUnit = {
  value: '0',
  displayDenom: '',
  baseDenom: '',
  exponent: 0,
};

const initialState: ValidatorDetailsState = {
  loading: true,
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

  const handleSetState = useCallback((stateChange: Partial<ValidatorDetailsState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ==========================
  // Desmos Profile
  // ==========================
  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      const desmosProfile = formatDesmosProfile(data);
      handleSetState({ desmosProfile });
      return desmosProfile;
    },
  });

  useEffect(() => {
    if (!isValidAddress(router.query.address as string)) {
      handleSetState({
        loading: false,
        exists: false,
      });
    } else if (extra.profile) {
      const address = validatorToDelegatorAddress(router.query.address as string);
      fetchDesmosProfile(address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.address]);

  // ==========================
  // Fetch Data
  // ==========================
  useValidatorDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  return {
    state,
  };
};

function formatAccountQuery(data: ValidatorDetailsQuery) {
  const stateChange: Partial<ValidatorDetailsState> = {
    loading: false,
  };

  if (!data.validator.length) {
    stateChange.exists = false;
    return stateChange;
  }

  // ============================
  // overview
  // ============================
  const formatOverview = () => {
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

  stateChange.overview = formatOverview();

  // ============================
  // status
  // ============================
  const formatStatus = () => {
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

  stateChange.status = formatStatus();
  // ============================
  // votingPower
  // ============================
  const formatVotingPower = () => {
    const selfVotingPower = data.validator[0]?.validatorVotingPowers?.[0]?.votingPower ?? 0;

    const votingPower = {
      self: selfVotingPower,
      overall: formatToken(data?.stakingPool?.[0]?.bonded ?? 0, votingPowerTokenUnit),
      height: data.validator[0]?.validatorVotingPowers?.[0]?.height ?? 0,
    };

    return votingPower;
  };
  stateChange.votingPower = formatVotingPower();

  return stateChange;
}
