import { useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import {
  useOnlineVotingPowerQuery,
  OnlineVotingPowerQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';

const initialState: {
  votingPower: number;
  totalVotingPower: number;
  activeValidators: number;
} = {
  votingPower: 0,
  totalVotingPower: 0,
  activeValidators: 0,
};

export const useOnlineVotingPower = () => {
  const [state, setState] = useState(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useOnlineVotingPowerQuery({
    onCompleted: (data) => {
      handleSetState(formatOnlineVotingPower(data));
    },
  });

  const formatOnlineVotingPower = (data: OnlineVotingPowerQuery) => {
    const votingPower = R.pathOr(0, [
      'validatorVotingPowerAggregate',
      'aggregate',
      'sum',
      'votingPower',
    ], data);
    const bonded = R.pathOr(0, [
      'stakingPool',
      0,
      'bonded',
    ], data);
    const activeValidators = R.pathOr(0, [
      'activeTotal',
      'aggregate',
      'count',
    ], data);

    return {
      activeValidators,
      votingPower,
      totalVotingPower: numeral(
        formatToken(bonded, chainConfig.votingPowerTokenUnit).value,
      ).value(),
    };
  };

  return {
    state,
  };
};
