import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import updateLocal from 'dayjs/plugin/updateLocale';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(updateLocal);
dayjs.extend(advancedFormat);
dayjs.extend(timezone);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    m: '1 min',
    mm: '%d min',
    h: 'an hr',
    hh: '%d hr',
    d: '1 day',
    dd: '%d days',
    M: '1 month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years',
  },
});

export default dayjs;

/**
 *
 * @param time dayjs.Dayjs
 * @param isUtc
 * @returns
 */
export const formatDayJs = (time: dayjs.Dayjs, mode: 'locale' | 'utc' = 'locale') => {
  if (mode === 'utc') {
    return time.format('MMM DD, YYYY hh:mm:ss A [(UTC)]');
  }

  return time.local().format('MMM DD, YYYY hh:mm:ss A (z)');
};
