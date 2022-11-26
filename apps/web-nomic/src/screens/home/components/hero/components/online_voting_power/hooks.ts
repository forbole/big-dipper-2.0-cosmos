import { useState } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { useOnlineVotingPowerQuery, OnlineVotingPowerQuery } from '@/graphql/types/general_types';
import chainConfig from '@/chainConfig';
import { formatToken } from '@/utils/format_token';

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
  const [onlineVPState, setOnlineVPState] = useState(initialState);

  const handleSetState = (stateChange: Partial<typeof onlineVPState>) => {
    setOnlineVPState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  };

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
        numeral(formatToken(bonded, chainConfig.votingPowerTokenUnit).value).value() ?? undefined,
    };
  };

  return {
    onlineVPState,
  };
};
