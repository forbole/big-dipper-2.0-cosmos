import chainConfig from '@/chainConfig';
import { OnlineVotingPowerQuery, useOnlineVotingPowerQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';
import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useState } from 'react';

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
    const votingPower = data?.validatorVotingPowerAggregate?.aggregate?.sum?.votingPower ?? 0;
    const bonded = data?.stakingPool?.[0]?.bonded ?? 0;
    const activeValidators = data?.activeTotal?.aggregate?.count ?? 0;

    return {
      activeValidators,
      votingPower,
      totalVotingPower:
        numeral(formatToken(bonded, chainConfig().votingPowerTokenUnit).value).value() ?? undefined,
    };
  };

  return {
    state,
  };
};
