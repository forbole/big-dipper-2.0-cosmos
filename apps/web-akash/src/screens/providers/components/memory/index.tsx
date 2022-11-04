import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Box from '@components/box';
import CustomToolTip from '@components/custom_tool_tip';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useStyles } from './styles';

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

  const convertBytesToTB = (bytes: number) => {
    return bytes / (10 ** 12);
  };

  const total = memory.available + memory.used;

  const data = [
    {
      legendKey: 'used',
      percentKey: 'usedPercent',
      value: numeral(convertBytesToTB(memory.used)).format('0,0'),
      rawValue: memory.used,
      percent: `${numeral((memory.used * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
    {
      legendKey: 'available',
      percentKey: 'availablePercent',
      value: numeral(convertBytesToTB(memory.available)).format('0,0'),
      rawValue: memory.available,
      percent: `${numeral((memory.available * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.two,
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('memory')}
      </Typography>
      <div className={classes.content}>
        <PieChart
          width={200}
          height={200}
        >
          <Pie
            stroke="none"
            cornerRadius={100}
            cy={90}
            data={data}
            innerRadius={80}
            outerRadius={90}
            dataKey="rawValue"
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
                        TB
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
                    {' '}
                    {x.value}
                    {' '}
                    TB
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
