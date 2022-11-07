import dayjs from 'dayjs';
export default dayjs;
/**
 * Util to switch between UTC or locale time
 * @param time current dayjs.Dayjs time
 * @param mode utc or locale, defaults to locale
 * @returns a string with to correct time
 */
export declare const formatDayJs: (time: dayjs.Dayjs, mode?: 'locale' | 'utc') => string;
//# sourceMappingURL=index.d.ts.map