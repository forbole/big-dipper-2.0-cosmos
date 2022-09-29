import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box, CustomToolTip,
} from '@components';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import { chainConfig } from '@configs';
import { useStyles } from './styles';
import { useTokenomics } from './hooks';

const Storage:React.FC<{
  className?: string;
  storage: {
    available: number;
    used: number;
    pending: number;
  };
}> = ({
  className, storage,
}) => {
  const { t } = useTranslation('providers');
  const {
    classes, theme,
  } = useStyles();
  const { state } = useTokenomics();

  const total = storage.available + storage.used + storage.pending;

  const data = [
    {
      legendKey: 'used',
      percentKey: 'usedPercent',
      value: numeral(storage.used).format('0,0'),
      rawValue: storage.used,
      percent: `${numeral((storage.used * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.two,
    },
    {
      legendKey: 'available',
      percentKey: 'availablePercent',
      value: numeral(storage.available).format('0,0'),
      rawValue: storage.available,
      percent: `${numeral((storage.available * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
    {
      legendKey: 'pending',
      percentKey: 'pendingPercent',
      value: numeral(storage.pending).format('0,0'),
      rawValue: storage.pending,
      percent: `${numeral((storage.pending * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.three,
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('storage')}
      </Typography>
      {/* <div className={classes.data}>
        {data.slice(0, 2).map((x) => (
          <div className="data__item" key={x.percentKey}>
            <Typography variant="h4">
              {x.value}
              {' '}
              {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
            </Typography>
            <Typography variant="caption">
              {t(x.percentKey, {
                percent: x.percent,
              })}
            </Typography>
          </div>
        ))}
      </div> */}
      <div className={classes.content}>

        <PieChart
          width={200}
          height={100}
          cy={100}
        >
          <Pie
            stroke="none"
            // cornerRadius={40}
            cy={90}
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={90}
            fill="#8884d8"
            // paddingAngle={-10}
            dataKey="rawValue"
            // stroke={theme.palette.background.paper}
            // strokeWidth={3}
            isAnimationActive={false}
          >
            {data.map((entry) => {
              return (
                <Cell key={entry.legendKey} fill={entry.fill} />
              );
            })}
          </Pie>
          <Tooltip
            content={(
              <CustomToolTip>
                {(x) => {
                  return (
                    <>
                      <Typography variant="caption">
                        {t(x.legendKey)}
                      </Typography>
                      <Typography variant="body1">
                        {x.value}
                        {' '}
                        (
                        {x.percent}
                        )
                      </Typography>
                    </>
                  );
                }}
              </CustomToolTip>
            )}
          />
        </PieChart>

        <div className={classes.legends}>
          {
            data.map((x) => {
              return (
                <div className="legends__item" key={x.legendKey}>
                  <Typography variant="caption">
                    {t(x.legendKey)}
                    {' '}
                    {x.value}
                    {' '}
                    Bytes
                    {' '}
                    {x.percent}
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

export default Storage;
