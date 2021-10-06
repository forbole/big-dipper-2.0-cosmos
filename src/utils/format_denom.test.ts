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
      ubar: {
        display: 'bar',
        exponent: 3,
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
    expect(results.format).toBe('0,0.[000000]');
  });

  it('formats correctly 2', async () => {
    const results = formatDenom('1000000', 'upotic');
    expect(results.value).toBe(1000000);
    expect(results.denom).toBe('potic');
    expect(results.format).toBe('0,0');
  });

  it('formats correctly 3', async () => {
    const results = formatDenom('1000000', 'ubar');
    expect(results.value).toBe(1000);
    expect(results.denom).toBe('bar');
    expect(results.format).toBe('0,0.[000]');
  });

  it('when token unit is unknown', async () => {
    const results = formatDenom('1000000', 'unknown');
    expect(results.value).toBe(1000000);
    expect(results.denom).toBe('unknown');
    expect(results.format).toBe('0,0.[000000]');
  });

  it('when unit is less than 1', async () => {
    const results = formatDenom('0.1', 'udaric');
    expect(results.value).toBe(0);
    expect(results.denom).toBe('daric');
  });

  it('bdjuno testcase: 1', async () => {
    const results = formatDenom('3591842519.561197300000000000', 'udaric');
    expect(results.value).toBe(3591.842519561197);
    expect(results.denom).toBe('daric');
  });

  it('bdjuno testcase: 2', async () => {
    const results = formatDenom('0', 'udaric');
    expect(results.value).toBe(0);
    expect(results.denom).toBe('daric');
  });

  it('bdjuno testcase: 3', async () => {
    const results = formatDenom(undefined, 'udaric');
    expect(results.value).toBe(0);
    expect(results.denom).toBe('daric');
  });

  it('bdjuno testcase: 4', async () => {
    const results = formatDenom(null, 'udaric');
    expect(results.value).toBe(0);
    expect(results.denom).toBe('daric');
  });

  it('bdjuno testcase: 5', async () => {
    const results = formatDenom('3259217548.864862539902764586', 'udaric');
    expect(results.value).toBeLessThan(3259.217548864862539902764586);
    expect(results.denom).toBe('daric');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
