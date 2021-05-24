/* eslint-disable */

require('@testing-library/jest-dom/extend-expect');
require('jest-localstorage-mock');

jest.mock('@utils/dayjs', () => {
  const mockTest = () => ({
    format: jest.fn(() => '2020-08-10 12:00:00'),
  });

  mockTest.utc = jest.fn(() => {
    const format = jest.fn(() => '2020-08-10 12:00:00');
    return (
      {
        format,
        fromNow: jest.fn(() => '1 day ago'),
        local: jest.fn(() => ({
          format,
        }))
      }
    );
  });
  return mockTest;
});

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});
