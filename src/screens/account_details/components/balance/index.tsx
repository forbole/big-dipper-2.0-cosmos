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
import { chainConfig } from '@src/chain_config';
import { useStyles } from './styles';
import { useAccountContext } from '../../contexts/account';

const Balance: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('accounts');
  const {
    classes, theme,
  } = useStyles();
  const { uiData } = useAccountContext();

  const empty = {
    key: 'empty',
    value: 2400,
    background: theme.palette.custom.tags.eight,
    display: '',
  };

  const backgrounds = [
    theme.palette.custom.tags.eight,
    theme.palette.custom.tags.six,
    theme.palette.custom.tags.two,
    theme.palette.custom.tags.one,
    theme.palette.custom.tags.four,
  ];

  const formatData = uiData.balance.chart.map((x, i) => ({
    ...x,
    background: backgrounds[i],
  }));

  const notEmpty = formatData.some((x) => x.value > 0);
  const dataCount = formatData.filter((x) => x.value > 0).length;

  const data = notEmpty ? formatData : [...formatData, empty];

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
                paddingAngle={dataCount > 1 ? 5 : 0}
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
            if (x.key.toLowerCase() === 'empty') {
              return null;
            }

            return (
              <div key={x.key} className="legends__single--container">
                <div className="single__label--container">
                  <div className="legend-color" style={{ background: x.background }} />
                  <Typography variant="body1">
                    {t(x.key)}
                  </Typography>
                </div>
                <Typography variant="body1">
                  {x.display}
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
                unit: chainConfig.display.toUpperCase(),
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
