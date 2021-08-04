import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useTokenomicsQuery,
  TokenomicsQuery,
} from '@graphql/types';
import { formatDenom } from '@utils/format_denom';
import { StakingParams } from '@models';

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
      results.total = formatDenom(numeral(total.amount).value(), total.denom).value;
    }

    const bonded = R.pathOr(state.bonded, [
      'stakingPool',
      0,
      'bonded',
    ], data);
    results.bonded = formatDenom(bonded, results.denom).value;

    const unbonding = R.pathOr(state.bonded, [
      'stakingPool',
      0,
      'unbonded',
    ], data);
    results.unbonding = formatDenom(unbonding, results.denom).value;

    const unbonded = results.total - results.unbonding - results.bonded;
    results.unbonded = unbonded;

    return results;
  };

  return {
    state,
  };
};
