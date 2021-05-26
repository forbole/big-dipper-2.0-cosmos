import { useState } from 'react';
import * as R from 'ramda';
import { formatDenom } from '@utils/format_denom';
import {
  useTotalVotingPowerListenerSubscription,
  useOnlineVotingPowerListenerSubscription,
  OnlineVotingPowerListenerSubscription,
  TotalVotingPowerListenerSubscription,
} from '@graphql/types';

const initialState: {
  height: number;
  votingPower: number;
  totalVotingPower: number;
} = {
  height: 0,
  votingPower: 0,
  totalVotingPower: 0,
};

export const useOnlineVotingPower = () => {
  const [state, setState] = useState(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ====================================
  // block voting power
  // ====================================

  useOnlineVotingPowerListenerSubscription({
    onSubscriptionData: (data) => {
      const currentVotingPower = formatOnlineVotingPower(data.subscriptionData.data);

      handleSetState({
        ...currentVotingPower,
      });
    },
  });

  const formatOnlineVotingPower = (data: OnlineVotingPowerListenerSubscription) => {
    const votingPower = R.pathOr(state.votingPower, [
      'block', 0, 'validatorVotingPowersAggregate', 'aggregate', 'sum', 'votingPower',
    ], data);
    return {
      height: R.pathOr(initialState.height, ['block', 0, 'height'], data),
      votingPower,
    };
  };

  // ====================================
  // total voting power
  // ====================================
  useTotalVotingPowerListenerSubscription({
    onSubscriptionData: (data) => {
      handleSetState({
        totalVotingPower: formatTotalVotingPower(data.subscriptionData.data),
      });
    },
  });

  const formatTotalVotingPower = (data: TotalVotingPowerListenerSubscription) => {
    let bonded = R.pathOr(initialState.totalVotingPower, [
      'stakingPool',
      0,
      'bonded',
    ], data);
    bonded = formatDenom(bonded);
    return bonded;
  };

  return {
    state,
  };
};
