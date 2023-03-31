import chainConfig from '@/chainConfig';
import Box from '@/components/box';
import useShallowMemo from '@/hooks/useShallowMemo';
import { readMarket } from '@/recoil/market';
import useStyles from '@/screens/account_details/components/balance/styles';
import { formatBalanceData } from '@/screens/account_details/components/balance/utils';
import { formatNumber } from '@/utils/format_token';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Big from 'big.js';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import { FC } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/components/loadingSpinner';

const DynamicPieChart = dynamic(() => Promise.resolve(PieChart), { ssr: false });
const { primaryTokenUnit, tokenUnits } = chainConfig();

type BalanceProps = Parameters<typeof formatBalanceData>[0] & {
  className?: string;
  total: TokenUnit;
};

const Balance: FC<BalanceProps> = (props) => {
  const { t } = useTranslation('accounts');
  const { classes, cx, theme } = useStyles();
  const market = useRecoilValue(readMarket);
  const formattedChartData = formatBalanceData(props);
  const empty = {
    key: 'empty',
    value: 2400,
    background: theme.palette.custom.charts.zero,
    display: '',
  };
  const backgrounds = [
    theme.palette.custom.charts.one,
    theme.palette.custom.charts.two,
    theme.palette.custom.charts.three,
    theme.palette.custom.charts.four,
    theme.palette.custom.charts.five,
  ];
  const formatData = formattedChartData.map((x, i) => ({
    ...x,
    value: numeral(x.value).value(),
    background: backgrounds[i],
  }));
  const notEmpty = formatData.some((x) => x.value && Big(x.value).gt(0));
  const dataMemo = useShallowMemo(notEmpty ? formatData : [...formatData, empty]);

  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        try {
          setIsLoading(true);
          const symbols = [
            'XRP/USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            '434F524500000000000000000000000000000000+rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D/XRP',
          ];
          const response = await axios.post('https://api.sologenic.org/api/v1/tickers/24h', {
            symbols,
          });

          if (response.status === 200) {
            const coreXrp: any = Object.values(response.data)[0];
            const xrpUsd: any = Object.values(response.data)[1];

            const coreumPrice = Big(coreXrp.last_price).times(xrpUsd.last_price);
            setPrice(coreumPrice.toNumber());
            setIsLoading(false);
          }
        } catch (e) {
          setIsError(true);
          console.error(e);
          setIsLoading(false);
        }
      })();
    }
  }, []);

  const dataCount = formatData.filter((x) => x.value && Big(x.value).gt(0)).length;
  const totalAmount = `$${numeral(
    Big(market.price || price)
      ?.times(props.total.value)
      .toPrecision()
  ).format('0,0.00')}`;

  // format
  const totalDisplay = formatNumber(props.total.value, props.total.exponent);

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography variant="h2">{t('balance')}</Typography>
      <div className={classes.chartWrapper}>
        <div className={classes.chart}>
          <ResponsiveContainer width="99%">
            <DynamicPieChart>
              <Pie
                dataKey="value"
                data={dataMemo}
                isAnimationActive={false}
                innerRadius="90%"
                outerRadius="100%"
                cornerRadius={40}
                paddingAngle={dataCount > 1 ? 5 : 0}
                fill="#82ca9d"
                stroke="none"
              >
                {dataMemo.map((entry) => (
                  <Cell key={entry.key} fill={entry.background} stroke={entry.background} />
                ))}
              </Pie>
            </DynamicPieChart>
          </ResponsiveContainer>
        </div>
        <div className={classes.legends}>
          {dataMemo.map((x) => {
            if (x.key.toLowerCase() === 'empty') {
              return null;
            }

            return (
              <div key={x.key} className="legends__single--container">
                <div className="single__label--container">
                  <div className="legend-color" style={{ background: x.background }} />
                  <Typography variant="body1">{t(x.key)}</Typography>
                </div>
                <Typography variant="body1">{x.display}</Typography>
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
                //Kept the "toUpperCase()" in order to show the token symbol in uppercase
                unit: props.total.displayDenom.toUpperCase(),
              })}
            </Typography>
            <Typography variant="h3">{totalDisplay}</Typography>
          </div>
          <Divider />
          <div className="total__secondary--container total__single--container">
            <Typography
              variant="body1"
              className="label"
              style={isError ? { color: '#F34747' } : {}}
            >
              {isLoading ? (
                <Spinner customStyle={{ marginLeft: '1rem', justifyContent: 'center' }} />
              ) : isError ? (
                'Error fetching CORE-USD price'
              ) : (
                /* Kept the "toUpperCase()" in order to show the token symbol in uppercase */
                `$${numeral(market.price || price).format('0,0.[00]', Math.floor)} / ${
                  tokenUnits?.[primaryTokenUnit]?.display?.toUpperCase() ?? ''
                }`
              )}
            </Typography>
            <Typography variant="body1">{price === 0 ? '--' : totalAmount}</Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Balance;
