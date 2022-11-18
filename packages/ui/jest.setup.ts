import 'jest-localstorage-mock';
import nextConfig from './next.config.js';

const chainConfig = JSON.parse(nextConfig.env.CHAIN_CONFIG || '');
chainConfig.tokenUnits = {
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
process.env = {
  ...process.env,
  ...nextConfig.env,
  CHAIN_CONFIG: JSON.stringify(chainConfig),
};

jest.mock('ui/utils/dayjs', () => {
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

jest.mock('ui/recoil/profiles', () => {
  return {
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
  };
});
