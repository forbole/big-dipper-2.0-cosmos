import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useTokenomicsQuery,
  TokenomicsQuery,
} from '@graphql/types';
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

    const [total] = R.pathOr([], [
      'supply',
      0,
      'coins',
    ], data)
      .filter((x) => x.denom === results.denom);
    if (total) {
      results.total = numeral(formatToken(total.amount, total.denom).value).value();
    }

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
    console.log(results, 'results');
    return results;
  };

  return {
    state,
  };
};
