import { useState } from 'react';
import * as R from 'ramda';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import {
  useStakeWeightQuery,
  StakeWeightQuery,
} from '@graphql/types';
import { StakeWeightState } from './types';

const tokenUnitBase: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useStakeWeight = () => {
  const [state, setState] = useState<StakeWeightState>({
    activatedStake: tokenUnitBase,
    totalSupply: tokenUnitBase,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useStakeWeightQuery({
    onCompleted: (data) => {
      handleSetState(formatStakeWeight(data));
    },
  });

  const formatStakeWeight = (data: StakeWeightQuery) => {
    const { activatedStake } = data.validatorStatusAggregate.aggregate.sum;
    const totalSupply = R.pathOr(0, ['supplyInfo', 0, 'total'], data);

    const activatedStakeTokenUnit = formatToken(activatedStake, chainConfig.primaryTokenUnit);
    const totalSupplyTokenUnit = formatToken(totalSupply, chainConfig.primaryTokenUnit);

    return ({
      activatedStake: activatedStakeTokenUnit,
      totalSupply: totalSupplyTokenUnit,
    });
  };

  return {
    state,
  };
};
