import numeral from 'numeral';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { useMemo, useRef, useEffect } from 'react';
import {
  createChart,
  LineStyle,
  PriceScaleMode,
  ColorType,
  UTCTimestamp,
  TimeScaleOptions,
  Time,
} from 'lightweight-charts';
import { useRecoilValue } from 'recoil';
import type { Theme } from '@mui/material';
import { readDate, readTimeFormat } from '@/recoil/settings';
import type { TokenPriceType } from '@/screens/home/components/hero/types';
import useAppTranslation from '@/hooks/useAppTranslation';

const formatTime = (time: dayjs.Dayjs, mode: 'locale' | 'utc' = 'locale') => {
  if (mode === 'utc') {
    return time.unix();
  }
  return time.local().unix();
};

const tickTimeFormatter = (
  unix: UTCTimestamp,
  mode: 'locale' | 'utc',
  format: '12-hour' | '24-hour',
  year: boolean
  // eslint-disable-next-line consistent-return
): string => {
  const dateObj = dayjs.unix(unix);
  const utc12FullFormat = 'YYYY-MM-DD hh:mm:ss A [(UTC)]';
  const utc24FullFormat = 'YYYY-MM-DD HH:mm:ss';
  const local12FullFormat = 'YYYY-MM-DD hh:mm:ss A (z)';
  const local24FullFormat = 'YYYY-MM-DD HH:mm:ss (z)';

  const t12Format = 'hh:mm A';
  const t24Format = 'HH:mm';

  if (year) {
    if (format === '24-hour') {
      if (mode === 'utc') {
        return dateObj.utc().format(utc24FullFormat);
      }
      return dateObj.local().format(local24FullFormat);
    }
    if (format === '12-hour') {
      if (mode === 'utc') {
        return dateObj.utc().format(utc12FullFormat);
      }
      return dateObj.local().format(local12FullFormat);
    }
  } else {
    if (format === '24-hour') {
      if (mode === 'utc') {
        return dateObj.utc().format(t24Format);
      }
      return dateObj.local().format(t24Format);
    }
    if (format === '12-hour') {
      if (mode === 'utc') {
        return dateObj.utc().format(t12Format);
      }
      return dateObj.local().format(t12Format);
    }
  }
  throw new Error('Invalid parameters');
};

const tickPriceFormatter = (num: number) => Number(numeral(num).format('0,0.00000'));

export const usePrice = (items: TokenPriceType[], theme: Theme) => {
  const { i18n } = useAppTranslation('home');

  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);

  const formatItems = useMemo(
    () =>
      items.map((x) => ({
        time: formatTime(dayjs.utc(x.time), dateFormat) as UTCTimestamp,
        fullTime: formatDayJs(dayjs.utc(x.time), dateFormat, timeFormat),
        value: x.value,
      })),
    [items, dateFormat, timeFormat]
  );

  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;
    const chart = createChart(container, {
      width: container.clientWidth,
      height: container.clientHeight,
      localization: {
        dateFormat: 'yyyy/MM/dd',
        locale: i18n.language === 'en' ? 'en-US' : navigator.language,
        priceFormatter: (p: number) => `${tickPriceFormatter(p)}`,
        timeFormatter: (t: UTCTimestamp) =>
          tickTimeFormatter(t as UTCTimestamp, dateFormat, timeFormat, true),
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

    const handleResize = () => {
      chart.applyOptions({ width: container.clientWidth });
    };

    chart.priceScale('right').applyOptions({
      mode: PriceScaleMode.Normal,
      borderColor: theme.palette.divider,
      autoScale: true,
      ticksVisible: true,
      textColor: theme.palette.text.primary,
      scaleMargins: {
        top: 0.1,
        bottom: 0.1,
      },
    });

    const timeScaleOptions: TimeScaleOptions = {
      timeVisible: true,
      secondsVisible: true,
      shiftVisibleRangeOnNewBar: true,
      rightOffset: 10,
      fixLeftEdge: true,
      fixRightEdge: true,
      borderVisible: true,
      borderColor: theme.palette.divider,
      lockVisibleTimeRangeOnResize: true,
      tickMarkFormatter: (time: Time) =>
        tickTimeFormatter(time as UTCTimestamp, dateFormat, timeFormat, false),
      barSpacing: 0,
      minBarSpacing: 0,
      rightBarStaysOnScroll: true,
      visible: true,
      ticksVisible: true,
    };

    chart.applyOptions({
      layout: {
        background: { type: ColorType.Solid, color: theme.palette.background.paper },
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
      },
      timeScale: timeScaleOptions,
    });

    window.addEventListener('resize', handleResize);

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
    timeFormat,
  ]);

  return {
    chartRef,
  };
};
