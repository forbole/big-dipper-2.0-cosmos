import React from 'react';
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
import {
  Box, CustomToolTip,
} from '@components';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { useStyles } from './styles';
import { usePrice } from './hooks';

const Price: React.FC<ComponentDefault> = (props) => {
  const {
    classes, theme,
  } = useStyles();
  const { t } = useTranslation('home');
  const {
    state,
    tickPriceFormatter,
    formatTime,
  } = usePrice();
  const dateFormat = useRecoilValue(readDate);

  const formatItems = state.items.map((x) => {
    return ({
      time: formatTime(dayjs.utc(x.time), dateFormat),
      fullTime: formatDayJs(dayjs.utc(x.time), dateFormat),
      value: x.value,
    });
  });

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('priceHistory')}
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
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={theme.palette.custom.primaryData.one}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={theme.palette.custom.primaryData.one}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={theme.palette.divider} />
            <XAxis
              dataKey="time"
              tickLine={false}
            />
            <YAxis
              tickLine={false}
              tickFormatter={tickPriceFormatter}
              tickCount={9}
              // domain={[0, 'dataMax + 40']}
              domain={['dataMin - 10', 'dataMax + 10']}
            />
            <Tooltip
              cursor={false}
              content={(
                <CustomToolTip>
                  {(x) => {
                    return (
                      <>
                        <Typography variant="caption">
                          {x.fullTime}
                        </Typography>
                        <Typography variant="body1">
                          $
                          {numeral(x.value).format('0,0.00')}
                        </Typography>
                      </>
                    );
                  }}
                </CustomToolTip>
            )}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={theme.palette.custom.primaryData.one}
              // fill={Color(theme.palette.custom.primaryData.one).alpha(0.7).toString()}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default Price;
