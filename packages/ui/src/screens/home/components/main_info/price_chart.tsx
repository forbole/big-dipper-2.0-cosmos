import { readTheme } from '@/recoil/settings';
import axios from 'axios';
import { createChart, IChartApi, SingleValueData } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

// import useTranslation from 'next-translate/useTranslation';
import useStyles from './styles';

const PriceChart: React.FC = () => {
  const { classes } = useStyles();
  const chartRef = useRef<IChartApi>();
  const theme = useRecoilValue(readTheme);
  const [data, setData] = useState<SingleValueData[]>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const chartData: any = await axios.get(
          'https://api.coingecko.com/api/v3/coins/coreum/market_chart?vs_currency=usd&days=7'
        );
        const formatted = chartData.data.prices.map((entry: any) => ({
          time: entry[0] / 1000,
          value: entry[1],
        }));
        setData(formatted);
      })();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !chartRef.current && data) {
      const chartOptions = {
        layout: {
          textColor: theme === 'dark' ? 'white' : 'black',
          background: {
            color: theme === 'dark' ? '#1B1D23' : 'white',
          },
        },
        grid: {
          vertLines: {
            color: theme === 'dark' ? '#1B1D23' : 'white',
          },
          horzLines: {
            color: theme === 'dark' ? '#1B1D23' : 'white',
          },
        },
        // disable scaling and panning since we aren't implementing a scrollback-refetch
        handleScroll: false,
        handleScale: false,
      };
      const chartPrice = document.getElementById('price-chart')!;
      chartRef.current = createChart(chartPrice, chartOptions);
      const baselineSeries = chartRef.current.addBaselineSeries({
        baseValue: {
          type: 'price',
          price: data[0].value,
        },
        topLineColor: 'rgba( 38, 166, 154, 1)',
        topFillColor1: 'rgba( 38, 166, 154, 0.28)',
        topFillColor2: 'rgba( 38, 166, 154, 0.05)',
        bottomLineColor: 'rgba( 239, 83, 80, 1)',
        bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
        bottomFillColor2: 'rgba( 239, 83, 80, 0.28)',
      });

      baselineSeries.setData(data);

      chartRef.current.timeScale().fitContent();
    }
  }, [data]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.applyOptions({
        layout: {
          textColor: theme === 'dark' ? 'white' : 'black',
          background: {
            color: theme === 'dark' ? '#1B1D23' : 'white',
          },
        },
        grid: {
          vertLines: {
            color: theme === 'dark' ? '#1B1D23' : 'white',
          },
          horzLines: {
            color: theme === 'dark' ? '#1B1D23' : 'white',
          },
        },
      });
    }
  }, [theme]);

  useEffect(() => {
    const handle = () => {
      if (chartRef.current) {
        const container: any = document.getElementById('price-chart');
        const dimensions = {
          width: container.clientWidth,
          height: container.clientHeight,
        };
        chartRef.current.applyOptions(dimensions);
        // chartRef.current.timeScale().fitContent();
      }
    };
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle);
    };
  }, []);

  return <div className={classes.chart} id="price-chart" />;
};

export default PriceChart;
