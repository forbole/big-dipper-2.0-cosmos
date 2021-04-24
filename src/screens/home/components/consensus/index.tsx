import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
} from '@components';
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Tooltip,
} from 'recharts';
import { useStyles } from './styles';
import { useConsensus } from './hooks';

const Consensus: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    classes, theme,
  } = useStyles();
  const {
    uiData, rawData,
  } = useConsensus();
  const { t } = useTranslation('home');

  const data = [
    {
      value: rawData.roundCompletion,
      fill: theme.palette.custom.primaryData.three,
    },
  ];

  const circleSize = 200;

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('consensus')}
      </Typography>
      <div className={classes.info}>
        <div>
          <Typography variant="caption" className="label" component="div">
            {t('height')}
          </Typography>
          <Typography variant="caption" className="label" component="div">
            {t('proposer')}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">
            {uiData.height}
          </Typography>
          {uiData.proposer}
        </div>
      </div>
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
            background
            dataKey="value"
            cornerRadius={circleSize / 2}
          />
          <Tooltip />
          {/* <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            <tspan className={classes.chartPercentLabel}>
              {uiData.stepCompletion}
            </tspan>
          </text> */}
          <text
            x={(circleSize / 2) - 32}
            y={(circleSize / 2) + 35}
            className={classes.chartExtraLabel}
          >
            <tspan className={classes.chartLabel}>
              {t('round', {
                round: uiData.round,
              })}
            </tspan>
          </text>
          <text
            x={(circleSize / 2) - 24}
            y={(circleSize / 2) + 55}
            className={classes.chartExtraLabel}
          >
            <tspan className={classes.chartLabel}>
              {t('step', {
                step: uiData.step,
              })}
            </tspan>
          </text>
        </RadialBarChart>
      </div>
    </Box>
  );
};

export default Consensus;
