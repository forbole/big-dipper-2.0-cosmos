import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { useStyles } from './styles';

const Balance: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('accounts');
  const {
    classes, theme,
  } = useStyles();

  const empty = {
    name: 'Empty', value: 2400, background: theme.palette.custom.tags.eight,
  };

  const data02 = [
    {
      name: 'Available', value: 2400, background: theme.palette.custom.tags.eight,
    },
    {
      name: 'Delegate', value: 4567, background: theme.palette.custom.tags.six,
    },
    {
      name: 'Unbonding', value: 1398, background: theme.palette.custom.tags.two,
    },
    {
      name: 'Reward', value: 9800, background: theme.palette.custom.tags.one,
    },
    {
      name: 'Commission', value: 3908, background: theme.palette.custom.tags.four,
    },
  ];

  const notEmpty = data02.some((x) => x.value > 0);

  const data = notEmpty ? data02 : [...data02, empty];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('balance')}
      </Typography>
      <div className={classes.chartWrapper}>
        <div className={classes.chart}>
          <ResponsiveContainer width="99%">
            <PieChart>
              <Pie
                dataKey="value"
                data={data}
                innerRadius="90%"
                outerRadius="100%"
                cornerRadius={40}
                paddingAngle={data.length > 1 ? 5 : 0}
                fill="#82ca9d"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.background}
                    stroke={entry.background}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={classes.legends}>
          {data.map((x) => {
            if (x.name.toLowerCase() === 'empty') {
              return null;
            }

            return (
              <div key={x.name} className="legends__single--container">
                <div className="single__label--container">
                  <div className="legend-color" style={{ background: x.background }} />
                  <Typography variant="body1">
                    {x.name}
                  </Typography>
                </div>
                <Typography variant="body1">
                  {x.value}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Divider className={classes.divider} />
        <div className={classes.total}>
          <div className="total__single--container">
            <Typography variant="h3" className="label">
              {t('total', {
                unit: 'DSM',
              })}
            </Typography>
            <Typography variant="h3">
              400,000,000
            </Typography>
          </div>
          <div className="total__secondary--container total__single--container">
            <Typography variant="body1" className="label">
              $0.00 / DSM
            </Typography>
            <Typography variant="body1">
              $40,000,000.00
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Balance;
