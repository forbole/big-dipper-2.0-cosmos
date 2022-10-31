/* eslint-disable */
require('./next.config');
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

jest.mock('ui/dist', () => ({
  chainConfig: {
    "chainName": "desmos",
    "title": "Desmos Block Explorer",
    "extra": {
      "profile": true,
    },
    "previewImage": "https://s3.bigdipper.live/desmos.png",
    "themes": {
      "default": "light",
      "themeList": [
        "light"
      ],
      "light": {
        "primary": {
          "main": "#FF835B",
          "contrastText": "#FFFFFF"
        },
        "background": {
          "default": "#F8F8F8",
          "paper": "#FFFFFF"
        },
        "divider": "#E8E8E8",
        "text": {
          "primary": "#000000",
          "secondary": "#414141"
        },
        "custom": {
          "general": {
            "background": "#F8F8F8",
            "surfaceOne": "#FFFFFF",
            "surfaceTwo": "#F8F8F8",
            "surfaceThree": "",
            "icon": "#999999"
          },
          "fonts": {
            "fontOne": "#000000",
            "fontTwo": "#414141",
            "fontThree": "#777777",
            "fontFour": "#999999",
            "fontFive": "#FFFFFF",
            "highlight": ""
          },
          "primaryData": {
            "one": "#F87255",
            "two": "#FA9147",
            "three": "#20D494",
            "four": "#2FB6E0"
          },
          "results": {
            "pass": "#1EC490",
            "fail": "#FD3B4C"
          },
          "tokenomics": {
            "zero": "",
            "one": "#2FB6E0",
            "two": "#FFC93D",
            "three": "#20D494"
          },
          "condition": {
            "zero": "#E6E6E6",
            "one": "#1EC490",
            "two": "#FF9338",
            "three": "#FF608A"
          },
          "charts": {
            "zero": "#E6E6E6",
            "one": "#20D494",
            "two": "#20D494",
            "three": "#F44747",
            "four": "#FF8732",
            "five": "#E95EB1"
          },
          "tags": {
            "zero": "#E8E8E14",
            "one": "#2460FA",
            "two": "#2BA897",
            "three": "#E79726",
            "four": "#F17053",
            "five": "#DA4B4B",
            "six": "#9438DC",
            "seven": "#1A869D",
            "eight": "#2C9950",
            "nine": "#B49F37",
            "ten": "#E9A852",
            "eleven": "#E94687",
            "twelve": "#C15EC10",
            "thirteen": "#C388D15",
            "fourteen": "#46AEE15",
            "fifteen": "#58BC97",
            "sixteen": "#90BC64",
            "seventeen": "#E99E8E",
            "eighteen": "#F0A485",
            "nineteen": "#D37769",
            "twenty": "#D9C794"
          }
        }
      }
    },
    "id": "morpheus-apollo-2",
    "chainType": "Testnet",
    "genesis": {
      "time": "2021-07-13T08:00:00",
      "height": 1045650
    },
    "prefix": {
      "consensus": "desmosvalcons",
      "validator": "desmosvaloper",
      "account": "desmos"
    },
    "primaryTokenUnit": "udaric",
    "votingPowerTokenUnit": "udaric",
    "tokenUnits": {
      "udaric": {
        "display": "daric",
        "exponent": 6
      }
    },
    "endpoints": {
      "graphql": "https://gql-morpheus.desmos.forbole.com/v1/graphql",
      "graphqlWebsocket": "wss://gql-morpheus.desmos.forbole.com/v1/graphql",
      "publicRpcWebsocket": "wss://rpc-morpheus.desmos.forbole.com/websocket"
    },
    "marketing": {
      "matomoURL": "",
      "matomoSiteID": ""
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
