import * as R from 'ramda';
import Big from 'big.js';
import { formatNumber } from 'ui/utils/format_token';
import { ThemeOptions } from '@material-ui/core/styles';
import { VotesType } from './types';

type FormatGraphType = {
  data: VotesType;
  theme: ThemeOptions;
  total: Big;
};
export const formatGraphData = ({ data, theme, total }: FormatGraphType) => {
  const keys = R.keys(data);
  const color = {
    0: theme.palette.custom.charts.four,
    1: theme.palette.custom.charts.one,
    2: theme.palette.custom.charts.three,
    3: theme.palette.custom.charts.two,
  };

  const formattedData = keys.map((x, i) => {
    const selectedData = data[x] as TokenUnit;
    return {
      name: x,
      value: Big(selectedData.value).toNumber(),
      display: formatNumber(selectedData.value, selectedData.exponent),
      percentage: total.gt(0)
        ? `${Big(selectedData.value).div(total.toString()).times(100).toFixed(2)}%`
        : '0%',
      color: color[i],
    };
  });

  const notEmpty = formattedData.some((x) => x.value > 0);

  if (!notEmpty) {
    formattedData.push({
      name: 'empty',
      value: 2400,
      color: theme.palette.custom.charts.zero,
      percentage: '0%',
      display: '',
    });
  }

  return formattedData;
};
