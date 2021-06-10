import { formatDenom } from './format_denom';

jest.mock('@configs', () => ({
  chainConfig: {
    primaryTokenUnit: 'udaric',
    tokenUnits: {
      udaric: {
        display: 'daric',
        exponent: 6,
      },
      upotic: {
        display: 'potic',
        exponent: 0,
      },
    },
  },
}));

// ==================================
// unit tests
// ==================================
describe('utils: formatDenom', () => {
  it('formats correctly 1', async () => {
    const results = formatDenom('1000000', 'udaric');
    expect(results.value).toBe(1);
    expect(results.denom).toBe('daric');
  });

  it('formats correctly 2', async () => {
    const results = formatDenom('1000000', 'upotic');
    expect(results.value).toBe(1000000);
    expect(results.denom).toBe('potic');
  });

  it('when token unit is unknown', async () => {
    const results = formatDenom('1000000', 'unknown');
    expect(results.value).toBe(1000000);
    expect(results.denom).toBe('unknown');
  });

  it('when unit is less than 1', async () => {
    const results = formatDenom('0.1', 'udaric');
    expect(results.value).toBe(0);
    expect(results.denom).toBe('daric');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
