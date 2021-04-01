import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useStyles } from './styles';

const Tokenomics:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const {
    classes, theme,
  } = useStyles();

  // ========================
  // fake data
  // ========================

  const data = [
    {
      name: 'Group B', value: 200, fill: theme.palette.custom.tags.one,
    },
    {
      name: 'Group A', value: 300, fill: theme.palette.custom.tags.six,
    },
    {
      name: 'Group B', value: 200, fill: theme.palette.custom.tags.four,
    },
  ].reverse();

  const weightData = [
    {
      value: '29,500',
      percent: '29.9%',
      key: 'bondedPercent',
    },
    {
      value: '30,000',
      percent: '30.6%',
      key: 'unbondedPercent',
    },
    {
      value: '30,000',
      percent: '30.6%',
      key: 'unbondingPercent',
    },
  ];

  const legends = [
    {
      key: t('bonded'),
    },
    {
      key: t('unbonded'),
    },
    {
      key: t('unbonding'),
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('tokenomics')}
      </Typography>
      <div className={classes.data}>
        {weightData.map((x) => (
          <div className="data__item" key={x.key}>
            <Typography variant="h4">
              {x.value}
            </Typography>
            <Typography variant="caption">
              {t(x.key, {
                percent: x.percent,
              })}
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
                    {x.key}
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

export default Tokenomics;
