import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';

const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
jest.mock('@apollo/client', () => ({
  ...jest.requireActual<object>('@apollo/client'),
  useApolloClient: () => mockClient,
}));

jest.mock('@/chainConfig', () => () => {
  const { default: chainConfig }: { default(): { tokenUnits: object } } =
    jest.requireActual('@/chainConfig');
  const config = chainConfig();
  config.tokenUnits = {
    udaric: {
      display: 'daric',
      exponent: 6,
    },
    upotic: {
      display: 'potic',
      exponent: 0,
    },
    ubar: {
      display: 'bar',
      exponent: 8,
    },
    rowan: {
      display: 'rowan',
      exponent: 18,
    },
  };
  return config;
});

jest.mock('@/utils/dayjs', () => {
  const mockTest = () => ({
    format: jest.fn(() => '2020-08-10 12:00:00'),
  });

  mockTest.utc = jest.fn(() => {
    const format = jest.fn(() => '2020-08-10 12:00:00');
    return {
      format,
      fromNow: jest.fn(() => '1 day ago'),
      diff: jest.fn(() => 30),
      local: jest.fn(() => ({
        format,
      })),
    };
  });

  return {
    __esModule: true,
    default: mockTest,
    formatDayJs: jest.fn(() => '2020-08-10 12:00:00'),
  };
});

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

jest.mock('@/recoil/profiles/hooks', () => ({
  useProfileRecoil: jest.fn((address) => ({
    address,
    name: address,
    imageUrl: '',
  })),
  useProfilesRecoil: jest.fn((address) => ({
    address,
    name: address,
    imageUrl: '',
  })),
}));
