import { useState } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import { useRouter } from 'next/router';
import {
  useStakeAccountDetailsQuery,
  StakeAccountDetailsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import {
  StakeAccountState, STAKE_STATUS,
} from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useTokenDetailAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<StakeAccountState>({
    loading: false,
    overview: {
      address: '',
      balance: defaultTokenUnit,
      staker: '',
      withdrawer: '',
    },
    stakeInfo: {
      status: STAKE_STATUS.UNKNOWN,
      delegated: defaultTokenUnit,
      voter: '',
      activationEpoch: 0,
      deactivationEpoch: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useStakeAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTokenAccounts(data));
    },
  });

  const formatTokenAccounts = (data: StakeAccountDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address: router.query.address,
        staker: R.pathOr('', ['stakeAccount', 0, 'staker'], data),
        withdrawer: R.pathOr('', ['stakeAccount', 0, 'withdrawer'], data),
        balance: formatToken(
          R.pathOr(0, ['stakeAccount', 0, 'nativeBalance', 'balance'], data),
          chainConfig.primaryTokenUnit,
        ),
      });
    };
    stateChange.overview = formatOverview();

    // ==========================
    // Stake info
    // ==========================
    const formatStakeInfo = () => {
      const SLOTS_PER_EPOCH = 432000;
      const MAX = 18446744073709552000;
      const slot = R.pathOr(0, ['block', 0, 'slot'], data);
      const currentEpoch = Big(slot).div(SLOTS_PER_EPOCH).toFixed(0, Big.roundDown);
      const activationEpoch = R.pathOr(0, ['stakeAccount', 0, 'stakeDelegation', 'activationEpoch'], data);
      const deactivationEpoch = R.pathOr(0, ['stakeAccount', 0, 'stakeDelegation', 'deactivationEpoch'], data);
      let status = STAKE_STATUS.UNKNOWN;

      const lessCheck = Big(activationEpoch).lt(currentEpoch);

      if (Big(activationEpoch).gte(currentEpoch)) {
        status = STAKE_STATUS.ACTIVATING;
      } else if (lessCheck && deactivationEpoch === MAX) {
        status = STAKE_STATUS.ACTIVE;
      } else if (
        lessCheck
        && deactivationEpoch !== MAX
        && deactivationEpoch > currentEpoch) {
        status = STAKE_STATUS.DEACTIVATED;
      } else if (
        lessCheck
        && deactivationEpoch !== MAX
        && deactivationEpoch <= currentEpoch) {
        status = STAKE_STATUS.DEACTIVATING;
      } else {
        status = STAKE_STATUS.UNKNOWN;
      }

      return ({
        status,
        delegated: formatToken(
          R.pathOr(0, ['stakeAccount', 0, 'stakeDelegation', 'stake'], data),
          chainConfig.primaryTokenUnit,
        ),
        voter: R.pathOr('', ['stakeAccount', 0, 'stakeDelegation', 'voter'], data),
        activationEpoch,
        deactivationEpoch,
      });
    };
    stateChange.stakeInfo = formatStakeInfo();

    return stateChange;
  };

  return ({
    state,
  });
};
