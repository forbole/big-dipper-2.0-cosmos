import { useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { formatDenom } from '@utils/format_denom';
import {
  useOnlineVotingPowerListenerSubscription,
  OnlineVotingPowerListenerSubscription,
  useTokenomicsQuery,
  TokenomicsQuery,
} from '@graphql/types';

const initialState: {
  current: {
    height: number;
    votingPower: number;
    totalVotingPower: number;
  }
} = {
  current: {
    height: 0,
    votingPower: 0,
    totalVotingPower: 0,
  },
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
        current: {
          ...currentVotingPower,
        },
      });
    },
  });

  const formatOnlineVotingPower = (data: OnlineVotingPowerListenerSubscription) => {
    const votingPower = R.pathOr(state.current.votingPower, [
      'block', 0, 'validatorVotingPowersAggregate', 'aggregate', 'sum', 'votingPower',
    ], data);

    return {
      height: R.pathOr(initialState.current.height, ['block', 0, 'height'], data),
      votingPower,
    };
  };

  // ====================================
  // tokenomics
  // ====================================

  useTokenomicsQuery({
    onCompleted: (data) => {
      handleSetState({
        current: {
          totalVotingPower: formatTokenomics(data),
        },
      });
    },
  });

  const formatTokenomics = (data: TokenomicsQuery) => {
    let bonded = R.pathOr(initialState.current.totalVotingPower, [
      'stakingPool',
      0,
      'bonded',
    ], data);
    bonded = formatDenom(bonded);
    return bonded;
  };

  const formatUi = () => {
    const {
      current,
    } = state;

    const votingPowerPercent = numeral((current.votingPower / current.totalVotingPower) * 100);
    return ({
      current: {
        height: numeral(current.height).format('0,0'),
        votingPower: numeral(current.votingPower).format('0,0'),
        votingPowerPercentRaw: votingPowerPercent.format(0),
        votingPowerPercent: `${votingPowerPercent.format('0,0.00')}%`,
        totalVotingPower: numeral(current.totalVotingPower).format('0,0'),
      },
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
