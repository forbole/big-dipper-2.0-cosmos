import numeral from 'numeral';
import { ThemeOptions } from '@material-ui/core/styles';
import { TallyType } from '../../types';

export const formatGraphData = (data:TallyType, theme:ThemeOptions) => {
  return ([
    {
      name: 'yes',
      value: data.yes,
      display: numeral(data.yes).format('0,0.[000000]'),
      percentage: `${numeral((data.yes / data.total) * 100).format('0.[00]')}%`,
      color: theme.palette.custom.charts.one,
    },
    {
      name: 'no',
      value: data.no,
      display: numeral(data.no).format('0,0.[000000]'),
      percentage: `${numeral((data.no / data.total) * 100).format('0.[00]')}%`,
      color: theme.palette.custom.charts.two,
    },
    {
      name: 'veto',
      value: data.veto,
      display: numeral(data.veto).format('0,0.[000000]'),
      percentage: `${numeral((data.veto / data.total) * 100).format('0.[00]')}%`,
      color: theme.palette.custom.charts.three,
    },
    {
      name: 'abstain',
      value: data.abstain,
      display: numeral(data.abstain).format('0,0.[000000]'),
      percentage: `${numeral((data.abstain / data.total) * 100).format('0.[00]')}%`,
      color: theme.palette.custom.charts.four,
    },
  ]);
};
