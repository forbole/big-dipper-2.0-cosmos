import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import updateLocal from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(updateLocal);

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
