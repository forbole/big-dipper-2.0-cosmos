import * as R from 'ramda';
import Big from 'big.js';
import { formatNumber } from '@utils/format_token';
import { ThemeOptions } from '@material-ui/core/styles';
import { VotesGraphState } from './types';

export const formatGraphData = (data:VotesGraphState, theme:ThemeOptions) => {
  const total = Big(data.yes.value)
    .plus(data.no.value)
    .plus(data.veto.value)
    .plus(data.abstain.value);

  const keys = R.keys(data);
  const color = {
    0: theme.palette.custom.charts.four,
    1: theme.palette.custom.charts.one,
    2: theme.palette.custom.charts.three,
    3: theme.palette.custom.charts.two,
  };

  const formattedData = keys.map((x, i) => {
    const selectedData = data[x] as TokenUnit;
    return ({
      name: x,
      value: Big(selectedData.value).toNumber(),
      display: formatNumber(selectedData.value, selectedData.exponent),
      percentage: `${Big(selectedData.value).div(total.toString()).times(100).toPrecision(2)}%`,
      color: color[i],
    });
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
