/* eslint-disable */

require('@testing-library/jest-dom/extend-expect');
require('jest-localstorage-mock');

jest.mock('@utils/dayjs', () => {
  const mockTest = () => ({
    format: jest.fn(() => '2020-08-10 12:00:00'),
  });

  mockTest.utc = jest.fn(() => {
    return (
      {
        fromNow: jest.fn(() => '1 day ago'),
      }
    );
  });
  return mockTest;
});
