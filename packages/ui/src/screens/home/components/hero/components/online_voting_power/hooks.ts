import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import chainConfig from '@/chainConfig';
import { OnlineVotingPowerQuery, useOnlineVotingPowerQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';

const { votingPowerTokenUnit } = chainConfig();

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
    totalVotingPower: numeral(formatToken(bonded, votingPowerTokenUnit).value).value() ?? 0,
  };
};

export const useOnlineVotingPower = () => {
  const [state, setState] = useState(initialState);

  const handleSetState = useCallback(
    (stateChange: (prevState: OnlineVotingPowerState) => OnlineVotingPowerState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useOnlineVotingPowerQuery({
    onCompleted: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        ...formatOnlineVotingPower(data),
      }));
    },
  });

  return {
    state,
  };
};
