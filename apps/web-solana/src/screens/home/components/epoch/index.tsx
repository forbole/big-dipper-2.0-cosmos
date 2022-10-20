import React from 'react';
import classnames from 'classnames';
import Big from 'big.js';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Tooltip,
} from 'recharts';
import { useStyles } from './styles';
import { useEpoch } from './hooks';

const Epoch: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    classes, theme,
  } = useStyles();
  const { t } = useTranslation('home');
  const { state } = useEpoch();

  const data = [
    {
      value: Big(state.epochRate).toNumber(),
      fill: theme.palette.custom.primaryData.three,
    },
  ];

  const circleSize = 200;

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('epoch')}
      </Typography>
      <div className={classes.content}>
        <RadialBarChart
          className={classes.chart}
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={90}
          outerRadius={90}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            label={{
              fill: '#666', position: 'insideStart',
            }}
            background
            dataKey="value"
            cornerRadius={circleSize / 2}
          />
          <Tooltip />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            <tspan className={classes.chartPercentLabel}>
              {numeral(state.epochRate).format('0')}
              %
            </tspan>
          </text>

          <text x={(circleSize / 2) - 35} y={(circleSize / 2) + 30}>
            <tspan className={classes.chartLabel}>
              {t('epoch')}
              {' '}
              {state.epochNumber}
            </tspan>
          </text>
        </RadialBarChart>
        <Typography variant="body2" className={classes.time}>
          <Trans
            i18nKey="home:untilNextEpoch"
            components={[
              <span className="highlight" />,
            ]}
            values={{
              hours: state.epochHours,
              minutes: state.epochMinutes,
            }}
          />
        </Typography>
      </div>
    </Box>
  );
};

export default Epoch;
