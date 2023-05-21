import Box from '@/components/box';
import CustomToolTip from '@/components/custom_tool_tip';
import { usePrice } from '@/screens/home/components/price/hooks';
import useStyles from '@/screens/home/components/price/styles';
import dayjs from '@/utils/dayjs';
import Typography from '@mui/material/Typography';
import Color from 'color';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import * as R from 'ramda';
import { FC } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Price: FC<ComponentDefault> = (props) => {
  const { classes, cx, theme } = useStyles();
  const { t } = useAppTranslation('home');
  const { state, tickPriceFormatter } = usePrice();

  const formatItems = state.items.map((x) => ({
    time: dayjs(x.time).format('MMM DD'),
    value: x.value,
  }));

  return (
    <Box className={cx(classes.root, props.className)}>
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
                  {(x) => (
                    <>
                      <Typography variant="caption">{R.pathOr('', ['time'], x)}</Typography>
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
              fill={Color(theme.palette.custom.primaryData.one).alpha(0.7).toString()}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default Price;
