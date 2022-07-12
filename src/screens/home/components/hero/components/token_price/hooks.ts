import dayjs from '@utils/dayjs';
import numeral from 'numeral';

export const usePrice = () => {
  const formatTime = (time: dayjs.Dayjs, mode: 'locale' | 'utc' = 'locale') => {
    if (mode === 'utc') {
      return time.format('HH:mm');
    }

    return time.local().format('HH:mm');
  };

  const tickPriceFormatter = (num: number) => {
    return `$${numeral(num).format('0,0.[00]')}`;
  };

  return {
    tickPriceFormatter,
    formatTime,
  };
};
