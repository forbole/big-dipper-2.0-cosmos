import numeral from 'numeral';
import dayjs from '@/utils/dayjs';

const formatTime = (time: dayjs.Dayjs, mode: 'locale' | 'utc' = 'locale') => {
  if (mode === 'utc') {
    return time.unix();
  }

  return time.local().unix();
};

function timeToTz(unix: number, mode: 'locale' | 'utc' = 'locale') {
  if (mode === 'utc') {
    return dayjs.unix(unix).utc().format('YYYY-MM-DD HH:mm:ss');
  }
  return dayjs.unix(unix).local().format('YYYY-MM-DD HH:mm:ss');
}

export const usePrice = () => {
  const tickPriceFormatter = (num: number) => Number(numeral(num).format('0,0.00000'));

  return {
    tickPriceFormatter,
    formatTime,
    timeToTz,
  };
};
