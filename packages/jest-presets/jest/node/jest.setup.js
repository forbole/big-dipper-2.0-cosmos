require('@testing-library/jest-dom/extend-expect');
require('jest-localstorage-mock');

const generalConfig = require('shared-utils/configs/general.json');
const base = require('shared-utils/configs/chains/base.json');
const { chains, ...others } =  base;
const chainConfig = { ...others, ...chains.find(c => c.id === 'morpheus-apollo-2') };

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
        diff: jest.fn(() => 30),
        local: jest.fn(() => ({
          format,
        }))
      }
    );
  });

  return ({
    __esModule: true,
    default: mockTest,
    formatDayJs: jest.fn(() => '2020-08-10 12:00:00')
  });
});

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

jest.mock('ui/dist', () => ({
  chainConfig,
  generalConfig
}));

jest.mock('@recoil/profiles', () => {
  return ({
    useProfileRecoil: jest.fn((address) => ({
      address,
      name: address,
      imageUrl: ''
    })),
    useProfilesRecoil: jest.fn((address) => ({
      address,
      name: address,
      imageUrl: ''
    })),
  });
});
