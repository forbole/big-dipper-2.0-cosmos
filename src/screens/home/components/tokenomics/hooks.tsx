import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { Theme } from '@material-ui/core/styles';
import {
  useTokenomicsQuery,
  TokenomicsQuery,

} from '@graphql/types';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@src/chain_config';

export const useTokenomics = (theme: Theme) => {
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

  const formatUi = () => {
    const {
      bonded,
      unbonded,
      unbonding,
      total,
    } = state;

    return ([
      {
        legendKey: 'bonded',
        percentKey: 'bondedPercent',
        value: numeral(bonded).format('0,0'),
        rawValue: bonded,
        percent: `${numeral((bonded * 100) / total).format('0.00')}%`,
        fill: theme.palette.custom.tags.one,
      },
      {
        legendKey: 'unbonded',
        percentKey: 'unbondedPercent',
        value: numeral(unbonded).format('0,0'),
        rawValue: unbonded,
        percent: `${numeral((unbonded * 100) / total).format('0.00')}%`,
        fill: theme.palette.custom.tags.six,
      },
      {
        legendKey: 'unbonding',
        value: numeral(unbonding).format('0,0'),
        rawValue: unbonding,
        percent: `${numeral((unbonding * 100) / total).format('0.00')}%`,
        fill: theme.palette.custom.tags.four,
      },
    ]);
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
