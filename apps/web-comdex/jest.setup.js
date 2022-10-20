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

jest.mock('@configs', () => ({
  chainConfig: {
    "title": "Desmos Block Explorer",
    "network": "morpheus-apollo-1",
    "icon": "https://raw.githubusercontent.com/forbole/big-dipper-assets/master/desmos/icon.svg?sanitize=true",
    "logo": "https://raw.githubusercontent.com/forbole/big-dipper-assets/master/desmos/logo.svg?sanitize=true",
    "prefix": {
      "consensus": "desmosvalcons",
      "validator": "desmosvaloper",
      "account": "desmos"
    },
    "genesis": {
      "time": "2021-04-27T13:00:00",
      "height": 1
    },
    "primaryTokenUnit": "udaric",
    "tokenUnits": {
      "udaric": {
        "display": "daric",
        "exponent": 6
      }
    },
    "extra": {
      "profile": true
    }
  },
  generalConfig: {
    "maintainer": {
      "name": "Forbole",
      "url": "https://forbole.com"
    },
    "github": {
      "reportIssue": "https://github.com/forbole/big-dipper-2.0-cosmos/issues"
    }
  }
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
