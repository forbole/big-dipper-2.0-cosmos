import CustomToolTip from '@/components/custom_tool_tip';
import { readDate, readTimeFormat } from '@/recoil/settings';
import { usePrice } from '@/screens/home/components/hero/components/token_price/hooks';
import useStyles from '@/screens/home/components/hero/components/token_price/styles';
import type { TokenPriceType } from '@/screens/home/components/hero/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import * as R from 'ramda';
import { FC, useMemo, useRef, useEffect } from 'react';
import { createChart, LineStyle, PriceScaleMode, UTCTimestamp } from 'lightweight-charts';
import { useRecoilValue } from 'recoil';

const TokenPrice: FC<{ items: TokenPriceType[] }> = (props) => {
  const { classes, theme } = useStyles();
  const { t, i18n } = useAppTranslation('home');
  const router = useRouter();
  const { tickPriceFormatter, formatTime, timeToTz } = usePrice();
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  console.log('lang', i18n.language === 'en' ? 'en-US' : 'zh-HK');

  const formatItems = useMemo(
    () =>
      props.items.map((x) => ({
        time: formatTime(dayjs.utc(x.time), dateFormat) as UTCTimestamp,
        fullTime: formatDayJs(dayjs.utc(x.time), dateFormat, timeFormat),
        value: x.value,
      })),
    [props.items, formatTime, dateFormat, timeFormat]
  );

  const chartRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;
    const chart = createChart(container, {
      width: container.clientWidth,
      // width: container.clientWidth,
      height: container.clientHeight,
      localization: {
        dateFormat: 'yyyy/MM/dd',
        locale: i18n.language === 'en' ? 'en-US' : 'zh-HK',
        priceFormatter: (p: number) => `${tickPriceFormatter(p)}`,
        timeFormatter: (d) => timeToTz(d, dateFormat),
      },
      autoSize: true,
    });
    chart.timeScale().fitContent();

    const lineSeries = chart.addLineSeries({
      color: theme.palette.custom.primaryData.one,
      lineWidth: 2,
      priceScaleId: 'right',
    });

    lineSeries.setData(formatItems);
    // lineSeries.setData(
    //   formatItems.map((item) => ({
    //     time: item.time,
    //     value: item.value,
    //   }))
    // );

    const handleResize = () => {
      chart.applyOptions({ width: container.clientWidth });
    };

    chart.applyOptions({
      layout: {
        background: theme.palette.background.paper,
        textColor: theme.palette.text.primary,
      },
      grid: {
        vertLines: {
          color: theme.palette.divider,
          style: LineStyle.Dotted,
        },
        horzLines: {
          color: theme.palette.divider,
          style: LineStyle.Dotted,
        },
        // vertLines: {
        //   color: 'rgba(197, 203, 206, 0.7)',
        // },
        // horzLines: {
        //   color: 'rgba(197, 203, 206, 0.7)',
        // },
      },
      priceScale: {
        width: '100%',
        height: '100%',
        mode: PriceScaleMode.Normal,
        borderColor: theme.palette.divider,
        autoScale: true,
        // shiftVisibleRangeOnNewBar: true,
        ticksVisible: true,
        textColor: theme.palette.text.primary,

        // scaleMargins: {
        //   top: 0.2,
        //   bottom: 0.2,
        // },
        // scaleMargins: {
        //   top: 0.3,
        //   bottom: 0.25,
        // },
      },
      timeScale: {
        borderColor: theme.palette.divider,
        timeVisible: true,
        // shiftVisibleRangeOnNewBar: true,
        rightOffset: 12,
        // fixLeftEdge: true,
        secondsVisible: true,
        lockVisibleTimeRangeOnResize: true,
      },
    });

    window.addEventListener('resize', handleResize);

    // eslint-disable-next-line consistent-return
    // return chart.timeScale().fitContent();

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [
    dateFormat,
    formatItems,
    i18n.language,
    theme.palette.background.paper,
    theme.palette.custom.primaryData.one,
    theme.palette.divider,
    theme.palette.text.primary,
    tickPriceFormatter,
    timeToTz,
  ]);

  return (
    <div>
      <Typography variant="h2">{t('priceHistory')}</Typography>
      <div ref={chartRef} className={classes.chart} />
    </div>
  );
};

export default TokenPrice;
