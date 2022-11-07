import React from 'react';
import Color from 'color';
import classnames from 'classnames';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Box from '@components/box';
import CustomToolTip from '@components/custom_tool_tip';
import dayjs from 'ui/utils/dayjs';
import { useStyles } from './styles';
import { usePrice } from './hooks';

const Price: React.FC<ComponentDefault> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useTranslation('home');
  const { state, tickPriceFormatter } = usePrice();

  const formatItems = state.items.map((x) => {
    return {
      time: dayjs(x.time).format('MMM DD'),
      value: x.value,
    };
  });

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('price')}
      </Typography>
      <div className={classes.chart}>
        <ResponsiveContainer width="99%">
          <AreaChart
            data={formatItems}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke={theme.palette.divider} />
            <XAxis dataKey="time" tickLine={false} />
            <YAxis tickLine={false} tickFormatter={tickPriceFormatter} tickCount={5} />
            <Tooltip
              cursor={false}
              content={
                <CustomToolTip>
                  {(x) => {
                    return (
                      <>
                        <Typography variant="caption">{x.time}</Typography>
                        <Typography variant="body1">
                          ${numeral(x.value).format('0,0.00')}
                        </Typography>
                      </>
                    );
                  }}
                </CustomToolTip>
              }
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={theme.palette.custom.primaryData.one}
              fill={Color(theme.palette.custom.primaryData.one).alpha(0.7).toString()}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default Price;
