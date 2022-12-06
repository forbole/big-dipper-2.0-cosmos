import CustomToolTip from '@/components/custom_tool_tip';
import { readDate } from '@/recoil/settings';
import { usePrice } from '@/screens/home/components/hero/components/token_price/hooks';
import { useStyles } from '@/screens/home/components/hero/components/token_price/styles';
import type { TokenPriceType } from '@/screens/home/components/hero/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import * as R from 'ramda';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useRecoilValue } from 'recoil';

const TokenPrice: React.FC<{ items: TokenPriceType[] } & ComponentDefault> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useTranslation('home');
  const { tickPriceFormatter, formatTime } = usePrice();
  const dateFormat = useRecoilValue(readDate);

  const formatItems = props.items.map((x) => ({
    time: formatTime(dayjs.utc(x.time), dateFormat),
    fullTime: formatDayJs(dayjs.utc(x.time), dateFormat),
    value: x.value,
  }));
  return (
    <div>
      <Typography variant="h2">{t('priceHistory')}</Typography>
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
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={theme.palette.custom.primaryData.one}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={theme.palette.divider} />
            <XAxis dataKey="time" tickLine={false} />
            <YAxis
              tickLine={false}
              tickFormatter={tickPriceFormatter}
              // tickCount={9}
              // domain={[0, 'dataMax + 1']}
              // domain={[0, 'dataMax']}
            />
            <Tooltip
              cursor={false}
              content={
                <CustomToolTip>
                  {(x) => (
                    <>
                      <Typography variant="caption">{R.pathOr('', ['fullTime'], x)}</Typography>
                      <Typography variant="body1">${numeral(x.value).format('0,0.00')}</Typography>
                    </>
                  )}
                </CustomToolTip>
              }
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={theme.palette.custom.primaryData.one}
              fillOpacity={0.3}
              fill={theme.palette.custom.primaryData.one}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TokenPrice;
