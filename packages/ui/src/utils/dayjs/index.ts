import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import updateLocal from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

// ============================================
// Dayjs addons setup here
// ============================================
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
