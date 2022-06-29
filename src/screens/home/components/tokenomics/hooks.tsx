import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useTokenomicsQuery,
  TokenomicsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { StakingParams } from '@models';
import { formatToken } from '@utils/format_token';

export const useTokenomics = () => {
  const [state, setState] = useState<{
    bonded: number;
    unbonded: number;
    unbonding: number;
    total: number;
    denom: string;
  }>({
    bonded: 0,
    unbonded: 0,
    unbonding: 0,
    total: 0,
    denom: '',
  });

  useTokenomicsQuery({
    onCompleted: (data) => {
      setState(formatTokenomics(data));
    },
  });

  const formatTokenomics = (data: TokenomicsQuery) => {
    const results = { ...state };
    const stakingParams = StakingParams.fromJson(R.pathOr({}, ['stakingParams', 0, 'params'], data));
    results.denom = stakingParams.bondDenom;

    const rawSupplyAmount = R.pathOr(0, ['adjustedSupply', 0, 'value'], data);

    results.total = numeral(formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit).value).value();

    const bonded = R.pathOr(state.bonded, [
      'stakingPool',
      0,
      'bonded',
    ], data);
    results.bonded = numeral(formatToken(bonded, results.denom).value).value();

    const unbonding = R.pathOr(state.bonded, [
      'stakingPool',
      0,
      'unbonded',
    ], data);
    results.unbonding = numeral(formatToken(unbonding, results.denom).value).value();

    const unbonded = results.total - results.unbonding - results.bonded;
    results.unbonded = unbonded;

    return results;
  };

  return {
    state,
  };
};
