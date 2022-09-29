import React, { memo } from 'react';
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

const Memory:React.FC<{
  className?: string;
  memory: {
    available: number;
    used: number;
  };
}> = ({
  className, memory,
}) => {
  const { t } = useTranslation('providers');
  const {
    classes, theme,
  } = useStyles();
  const { state } = useTokenomics();

  const total = memory.available + memory.used;

  const data = [
    {
      legendKey: 'used',
      percentKey: 'usedPercent',
      value: numeral(memory.used).format('0,0'),
      rawValue: memory.used,
      percent: `${numeral((memory.used * 100) / total).format('0.00')}%`,
      // percent: `${100 - (numeral((memory.available * 100) / total).format('0.00'))}%`,
      fill: theme.palette.custom.tokenomics.two,
    },
    {
      legendKey: 'available',
      percentKey: 'availablePercent',
      value: numeral(memory.available).format('0,0'),
      rawValue: memory.available,
      percent: `${numeral((memory.available * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('memory')}
      </Typography>
      {/* <div className={classes.data}>
        {data.slice(0, 2).map((x) => (
          <div className="data__item" key={x.percentKey}>
            <Typography variant="h4">
              {x.value}
              {' '}
              TB
            </Typography>
            <Typography variant="caption">
              {x.percent}
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
                  <Typography variant="caption" className="usage">
                    {t(x.legendKey)}
                    {' '}
                  </Typography>
                  <Typography variant="caption" className="tb">
                    (
                    {x.value}
                    {' '}
                    Bytes
                    )
                  </Typography>
                  <Typography variant="caption" className="percent">
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

export default Memory;
