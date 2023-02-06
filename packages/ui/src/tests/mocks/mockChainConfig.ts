import { jest } from '@jest/globals';

function mockChainConfig() {
  const { default: chainConfig } =
    jest.requireActual<{ default(): { tokenUnits: object } }>('@/chainConfig');
  const config = chainConfig();
  config.tokenUnits = {
    udaric: { display: 'daric', exponent: 6 },
    upotic: { display: 'potic', exponent: 0 },
    ubar: { display: 'bar', exponent: 8 },
    rowan: { display: 'rowan', exponent: 18 },
  };
  jest.mock('@/chainConfig', () => jest.fn(() => config));
}

export default mockChainConfig;
