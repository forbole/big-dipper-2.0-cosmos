import numeral from 'numeral';
import * as R from 'ramda';
import { useState } from 'react';
import chainConfig from '@/chainConfig';
import { OnlineVotingPowerQuery, useOnlineVotingPowerQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';

const { votingPowerTokenUnit } = chainConfig();

type OnlineVPState = {
  votingPower: number;
  totalVotingPower: number;
  activeValidators: number;
};

const initialState: OnlineVPState = {
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
  const [onlineVPState, setOnlineVPState] = useState(initialState);

  const handleSetState = (stateChange: (prevState: OnlineVPState) => OnlineVPState) => {
    setOnlineVPState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  };

  useOnlineVotingPowerQuery({
    onCompleted: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        ...formatOnlineVotingPower(data),
      }));
    },
  });

  return {
    onlineVPState,
  };
};
