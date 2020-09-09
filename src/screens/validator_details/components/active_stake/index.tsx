import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@components';
import { useStyles } from './styles';

const ActiveStake: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('validators');
  const {
    classes, theme,
  } = useStyles();

  const fakeData = [
    {
      x: 0, y: 5,
    },
    {
      x: 1, y: 10,
    },
    {
      x: 2, y: 15,
    },
    {
      x: 3, y: 20,
    },
  ];

  return (
    <Box className={classnames(className)}>
      <Typography variant="h2" className={classes.label}>
        {t('activeStake')}
      </Typography>
      <div className={classes.dateWrapper}>
        <div className={classes.date}>
          <Typography variant="body2">
            {t('today')}
          </Typography>
          <Typography variant="h3" color="primary">
            184,136.334
          </Typography>
        </div>
        <div className={classes.date}>
          <Typography variant="body2">
            {t('lastMonth')}
          </Typography>
          <Typography variant="h3">
            179,647.354
          </Typography>
        </div>
      </div>
      <div className={classes.chart}>
        <ResponsiveContainer width="99%">
          <LineChart
            data={fakeData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid stroke={theme.palette.divider} />
            <XAxis
              dataKey="x"
              tickSize={0}
              dy={20}
              height={50}
              stroke={theme.palette.divider}
              tickFormatter={(tick) => {
                return numeral(tick).format('0,0');
              }}
            />
            <YAxis
              dataKey="y"
              dx={-10}
              tickSize={0}
              width={30}
              stroke={theme.palette.divider}
              tickFormatter={(tick) => {
                return numeral(tick).format('0,0a');
              }}
            />
            <Tooltip cursor={false} />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="y"
              stroke={theme.palette.primary.main}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default ActiveStake;
