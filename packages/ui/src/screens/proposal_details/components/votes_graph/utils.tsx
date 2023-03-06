import { ThemeOptions } from '@mui/material/styles';
import Big from 'big.js';
import * as R from 'ramda';
import { formatNumber } from '@/utils/format_token';
import type { VotesType } from '@/screens/proposal_details/components/votes_graph/types';

type FormatGraphType = {
  data: VotesType;
  theme: ThemeOptions;
  total: Big;
};
export const formatGraphData = ({ data, theme, total }: FormatGraphType) => {
  const keys = R.keys(data);
  const color = {
    0: theme.palette?.custom?.charts.one,
    1: theme.palette?.custom?.charts.four,
    2: theme.palette?.custom?.charts.three,
    3: theme.palette?.custom?.charts.two,
  };

  const formattedData = keys.map((x, i) => {
    const selectedData = data[x];
    return {
      name: x as string,
      value: Big(selectedData.value).toNumber(),
      display: formatNumber(selectedData.value, selectedData.exponent),
      percentage: total.gt(0)
        ? `${Big(selectedData.value).div(total)?.times(100).toFixed(2)}%`
        : '0%',
      color: color[i as keyof typeof color],
    };
  });

  const notEmpty = formattedData.some((x) => x.value > 0);

  if (!notEmpty) {
    formattedData.push({
      name: 'empty',
      value: 2400,
      color: theme.palette?.custom?.charts.zero,
      percentage: '0%',
      display: '',
    });
  }

  return formattedData;
};
