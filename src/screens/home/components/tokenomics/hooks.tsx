import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useTokenomicsQuery,
  TokenomicsQuery,

} from '@graphql/types';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@configs';

export const useTokenomics = () => {
  const [state, setState] = useState<{
    bonded: number;
    unbonded: number;
    unbonding: number;
    total: number;
  }>({
    bonded: 0,
    unbonded: 0,
    unbonding: 0,
    total: 0,
  });

  useTokenomicsQuery({
    onCompleted: (data) => {
      setState(formatTokenomics(data));
    },
  });

  const formatTokenomics = (data: TokenomicsQuery) => {
    const results = { ...state };

    const [total] = R.pathOr([], [
      'supply',
      0,
      'coins',
    ], data)
      .filter((x) => x.denom === chainConfig.base);
    if (total) {
      results.total = formatDenom(numeral(total.amount).value());
    }

    const bonded = R.pathOr(state.bonded, [
      'stakingPool',
      0,
      'bonded',
    ], data);
    results.bonded = formatDenom(bonded);

    const unbonding = R.pathOr(state.bonded, [
      'stakingPool',
      0,
      'unbonded',
    ], data);
    results.unbonding = formatDenom(unbonding);

    const unbonded = results.total - results.unbonding - results.bonded;
    results.unbonded = unbonded;
    return results;
  };

  return {
    state,
  };
};
