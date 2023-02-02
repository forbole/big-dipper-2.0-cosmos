import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import updateLocal from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

// ============================================
// Dayjs addons setup here
// ============================================
dayjs.extend(relativeTime, {
  thresholds: [
    { l: 's', r: 1 },
    { l: 'm', r: 1 },
    { l: 'mm', r: 59, d: 'minute' },
    { l: 'h', r: 1 },
    { l: 'hh', r: 23, d: 'hour' },
    { l: 'd', r: 1 },
    { l: 'dd', r: 29, d: 'day' },
    { l: 'M', r: 1 },
    { l: 'MM', r: 11, d: 'month' },
    { l: 'y', r: 1 },
    { l: 'yy', d: 'year' },
  ],
});
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
 * Util to switch between UTC or locale time
 * @param time current dayjs.Dayjs time
 * @param mode utc or locale, defaults to locale
 * @returns a string with to correct time
 */
export const formatDayJs = (time: dayjs.Dayjs, mode: 'locale' | 'utc' = 'locale') => {
  if (mode === 'utc') {
    return time.format('MMM DD, YYYY hh:mm:ss A [(UTC)]');
  }

  return time.local().format('MMM DD, YYYY hh:mm:ss A (z)');
};
