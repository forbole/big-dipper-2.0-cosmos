import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { OnlineVotingPowerQuery, useOnlineVotingPowerQuery } from '@/graphql/types/general_types';

type OnlineVotingPowerState = {
  votingPower: number;
  totalVotingPower: number;
  activeValidators: number;
};

const initialState: OnlineVotingPowerState = {
  votingPower: 0,
  totalVotingPower: 0,
  activeValidators: 0,
};

const formatOnlineVotingPower = (data: OnlineVotingPowerQuery) => {
  const votingPower = data?.validatorVotingPowerAggregate?.aggregate?.sum?.votingPower ?? 0;
  const bonded = data?.stakingPool?.[0]?.bonded ?? 0;
  const activeValidators = data?.activeTotal?.aggregate?.count ?? 0;

  return {
    activeValidators,
    votingPower,
    totalVotingPower: Number(bonded),
  };
};

export const useOnlineVotingPower = () => {
  const [state, setState] = useState(initialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: OnlineVotingPowerState) => OnlineVotingPowerState) => {
      setState(prevState => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useOnlineVotingPowerQuery({
    onCompleted: data => {
      handleSetState(prevState => ({
        ...prevState,
        ...formatOnlineVotingPower(data),
      }));
    },
  });

  return {
    state,
  };
};
