import { useCallback, useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { useOnlineVotingPowerQuery, OnlineVotingPowerQuery } from '@graphql/types/general_types';
import chainConfig from 'ui/chainConfig';
import { formatToken } from 'ui/utils/format_token';

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

  const handleSetState = useCallback((stateChange: Partial<typeof state>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useOnlineVotingPowerQuery({
    onCompleted: (data) => {
      handleSetState(formatOnlineVotingPower(data));
    },
  });

  const formatOnlineVotingPower = (data: OnlineVotingPowerQuery) => {
    const votingPower = R.pathOr(
      0,
      ['validatorVotingPowerAggregate', 'aggregate', 'sum', 'votingPower'],
      data
    );
    const bonded = R.pathOr(0, ['stakingPool', 0, 'bonded'], data);
    const activeValidators = R.pathOr(0, ['activeTotal', 'aggregate', 'count'], data);

    return {
      activeValidators,
      votingPower,
      totalVotingPower: numeral(
        formatToken(bonded, chainConfig.votingPowerTokenUnit).value
      ).value() ?? undefined,
    };
  };

  return {
    state,
  };
};
