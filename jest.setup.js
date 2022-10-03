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
    },
    "endpoints": {
      "graphql":"https://gql.desmos.forbole.com/v1/graphql",
      "graphqlWebsocket":"wss://gql.desmos.forbole.com/v1/graphql",
      "publicRpcWebsocket":"wss://rpc.desmos.forbole.com/websocket"
    },
    "general": {
      "basePath": "/desmos",
      "previewImage": "https://s3.bigdipper.live/desmos.png"
    },
    "marketing": {
      "matomoURL":"https://analytics.bigdipper.live",
      "matomoSiteID":"8"
    },
    "style": {
      "themes": {
        "default": "light",
        "themeList": ["light", "dark", "deuteranopia", "tritanopia"],
        "light": {
          "background": {
            "default": "#F8F8F8",
            "paper": "#FFFFFF",
            "surfaceOne": "#FFFFFF",
            "surfaceTwo": "#F8F8F8"
          },
          "primary": {
            "main": "#FD3B4C",
            "contrastText": "#fff"
          },
          "divider": "#E8E8E8",
          "text": {
            "primary": "#000000",
            "secondary": "#414141"
          },
          "fonts": {
            "fontOne": "#000000",
            "fontTwo": "#414141",
            "fontThree": "#777777",
            "fontFour": "#999999",
            "fontFive": "#FFFFFF",
            "highlight": "#1D86FF"
          },
          "primaryData": {
            "one": "#FA3A39",
            "two": "#FD5E1F",
            "three": "#FD5D4E",
            "four": "#FD9526"
          },
          "results": {
            "pass": "#1EC490",
            "fail": "#FD3B4C"
          },
          "tokenomics": {
            "one": "#1EC490",
            "two": "#497BFF",
            "three": "#9F46EC"
          },
          "condition": {
            "zero": "#E8E8E8",
            "one": "#1EC490",
            "two": "#FF961B",
            "three": "#FC6A8A"
          },
          "charts": {
            "zero": "#E8E8E8",
            "one": "#EB3AA4",
            "two": "#497BFF",
            "three": "#FF961B",
            "four": "#1EC490",
            "five": "#9F46EC"
          }
        },
        "dark": {
          "background": {
            "default": "#0A0A0A",
            "paper": "#131316",
            "surfaceOne": "#131316",
            "surfaceTwo": "#19191D"
          },
          "primary": {
            "main": "Color('#FD3B4C').alpha(0.7).string()",
            "contrastText": "#fff"
          },
          "divider": "#3D3D43",
          "text": {
            "primary": "#E6E6E6",
            "secondary": "#AAAAAB"
          },
          "fonts": {
            "fontOne": "#E6E6E6",
            "fontTwo": "#AAAAAB",
            "fontThree": "#818181",
            "fontFour": "#999999",
            "fontFive": "#FFFFFF",
            "highlight": "#1D86FF"
          },
          "primaryData": {
            "one": "#af2929",
            "two": "#b44516",
            "three": "#b14237",
            "four": "#b16919"
          },
          "results": {
            "pass": "#198a65",
            "fail": "#b12a34"
          },
          "tokenomics": {
            "one": "#1EC490",
            "two": "#497BFF",
            "three": "#9F46EC"
          },
          "condition": {
            "zero": "#E8E8E8",
            "one": "#1EC490",
            "two": "#FF961B",
            "three": "#FF608A"
          },
          "charts": {
            "zero": "#E8E8E8",
            "one": "#EB3AA4",
            "two": "#497BFF",
            "three": "#FF961B",
            "four": "#1EC490",
            "five": "#9F46EC"
          }
        }
      }
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
