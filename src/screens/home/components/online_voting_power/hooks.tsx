import { useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import Link from 'next/link';
import { formatDenom } from '@utils/format_denom';
import { Typography } from '@material-ui/core';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import {
  useOnlineVotingPowerSubscription,
  OnlineVotingPowerSubscription,
  useTokenomicsLazyQuery,
  TokenomicsQuery,
  useLatestBlockHeightOffsetQuery,
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

  useOnlineVotingPowerSubscription({
    onSubscriptionData: (data) => {
      const currentVotingPower = formatOnlineVotingPower(data.subscriptionData.data);

      if (currentVotingPower.height) {
        useTokenomicsQuery({
          variables: {
            height: currentVotingPower.height,
          },
        });
      }

      handleSetState({
        current: {
          ...currentVotingPower,
        },
      });
    },
  });

  const formatOnlineVotingPower = (data: OnlineVotingPowerSubscription) => {
    return {
      height: R.pathOr(initialState.current.height, ['block', 0, 'height'], data),
      votingPower: R.pathOr(initialState.current.votingPower, ['block', 0, 'preCommitsAggregate', 'aggregate', 'sum', 'votingPower'], data),
    };
  };

  // ====================================
  // tokenomics
  // ====================================

  const [useTokenomicsQuery] = useTokenomicsLazyQuery({
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
    return ({
      current: {
        height: numeral(current.height).format('0,0'),
        votingPower: numeral(current.votingPower).format('0,0'),
        votingPowerPercent: `${numeral((current.votingPower / current.totalVotingPower) * 100).format('0,0.00')}%`,
        totalVotingPower: numeral(current.totalVotingPower).format('0,0'),
      },
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
