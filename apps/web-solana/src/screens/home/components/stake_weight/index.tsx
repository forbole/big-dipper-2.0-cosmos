import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import Big from 'big.js';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { formatNumber } from '@utils/format_token';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { chainConfig } from '@src/configs';
import { useStyles } from './styles';
import { useStakeWeight } from './hooks';

const StakeWeight:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const {
    classes, theme,
  } = useStyles();
  const { state } = useStakeWeight();

  const nonWeighted = Big(state.totalSupply.value).minus(state.activatedStake.value).toPrecision(
    chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent,
  );

  const weightedPercent = state.totalSupply.value === '0'
    ? '0' : Big(state.activatedStake.value).div(state.totalSupply.value).times(100).toPrecision(2);
  const nonWeightedPercent = state.totalSupply.value === '0'
    ? '0' : Big(nonWeighted).div(state.totalSupply.value).times(100).toPrecision(2);

  const data = [
    {
      name: 'weighted',
      value: Big(state.activatedStake.value).toNumber(),
      fill: theme.palette.custom.chartData.one,
    },
    {
      name: 'nonWeighted',
      value: Big(nonWeighted).toNumber(),
      fill: theme.palette.custom.chartData.three,
    },
  ].reverse();

  const denom = state.activatedStake.displayDenom.toUpperCase();

  const weightData = [
    {
      percent: `${weightedPercent}%`,
      value: `${formatNumber(state.activatedStake.value, 2)} ${denom}`,
      key: 'weighted',
    },
    {
      percent: `${nonWeightedPercent}%`,
      value: `${formatNumber(nonWeighted, 2)} ${denom}`,
      key: 'nonWeighted',
    },
  ];

  const legends = [
    {
      key: 'weighted',
    },
    {
      key: 'nonWeighted',
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('stakeWeight')}
      </Typography>
      <div className={classes.data}>
        {weightData.map((x) => (
          <div className="data__item" key={x.key}>
            <Typography variant="h4">
              {x.value}
            </Typography>
            <Typography variant="caption" component="div">
              {t(x.key)}
            </Typography>
            <Typography variant="caption" component="div">
              {x.percent}
            </Typography>
          </div>
        ))}
      </div>
      <div className={classes.content}>

        <PieChart
          width={200}
          height={100}
          cy={100}
        >
          <Pie
            stroke="none"
            cornerRadius={40}
            cy={90}
            data={data}
            startAngle={0}
            endAngle={180}
            innerRadius={79}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={-10}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={data[index % data.length].fill} />
            ))}
          </Pie>
        </PieChart>

        <div className={classes.legends}>
          {
            legends.map((x) => {
              return (
                <div className="legends__item" key={x.key}>
                  <Typography variant="caption">
                    {t(x.key)}
                  </Typography>
                </div>
              );
            })
          }
        </div>
      </div>
    </Box>
  );
};

export default StakeWeight;
