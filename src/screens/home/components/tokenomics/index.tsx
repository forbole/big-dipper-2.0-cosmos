import React from 'react';
import classnames from 'classnames';
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
import { useStyles } from './styles';
import { useTokenomics } from './hooks';

const Tokenomics:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const {
    classes, theme,
  } = useStyles();
  const { uiData } = useTokenomics(theme);

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('tokenomics')}
      </Typography>
      <div className={classes.data}>
        {uiData.slice(0, 2).map((x) => (
          <div className="data__item" key={x.percentKey}>
            <Typography variant="h4">
              {x.value}
            </Typography>
            <Typography variant="caption">
              {t(x.percentKey, {
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
            // stroke="none"
            // cornerRadius={40}
            cy={90}
            data={uiData}
            startAngle={180}
            endAngle={0}
            // innerRadius={79}
            outerRadius={90}
            fill="#8884d8"
            // paddingAngle={-10}
            dataKey="rawValue"
            stroke={theme.palette.divider}
          >
            {uiData.map((entry) => {
              return (
                <Cell key={entry.legendKey} fill={entry.fill} />
              );
            })}
          </Pie>
          <Tooltip
            content={(
              <CustomToolTip>
                {(data) => {
                  return (
                    <>
                      <Typography variant="caption">
                        {t(data.legendKey)}
                      </Typography>
                      <Typography variant="body1">
                        {data.value}
                        {' '}
                        (
                        {data.percent}
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
            uiData.map((x) => {
              return (
                <div className="legends__item" key={x.legendKey}>
                  <Typography variant="caption">
                    {t(x.legendKey)}
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
