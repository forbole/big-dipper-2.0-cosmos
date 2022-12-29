import dayjs from '@/utils/dayjs';
import numeral from 'numeral';

const formatTime = (time: dayjs.Dayjs, mode: 'locale' | 'utc' = 'locale') => {
  if (mode === 'utc') {
    return time.format('HH:mm');
  }

  return time.local().format('HH:mm');
};

export const usePrice = () => {
  const tickPriceFormatter = (num: number) => `$${numeral(num).format('0,0.[00]')}`;

  return {
    tickPriceFormatter,
    formatTime,
  };
};
