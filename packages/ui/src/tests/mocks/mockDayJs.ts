import { jest } from '@jest/globals';

function mockDayJs() {
  const format = jest.fn(() => '2020-08-10 12:00:00');
  const fromNow = jest.fn(() => '1 day ago');
  const diff = jest.fn(() => 30);
  const local = jest.fn(() => ({ format }));
  const utc = jest.fn(() => ({ format, fromNow, diff, local }));
  const unix = jest.fn(() => ({ format, fromNow, diff, local }));
  const formatDayJs = jest.fn(() => '2020-08-10 12:00:00');
  jest.mock('@/utils/dayjs', () => ({
    __esModule: true,
    default: { format, utc, unix },
    formatDayJs,
  }));
}

export default mockDayJs;
