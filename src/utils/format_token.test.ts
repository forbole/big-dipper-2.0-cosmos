import {
  removeEndingZeros,
  formatNumber,
  formatToken,
} from './format_token';

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
        exponent: 8,
      },
      rowan: {
        display: 'rowan',
        exponent: 18,
      },
    },
  },
}));

// ==================================
// unit tests
// ==================================
describe('utils: removeEndingZeros', () => {
  it('format correctly #1', async () => {
    const results = removeEndingZeros('1000000');
    expect(results).toBe('1');
  });

  it('format correctly #2', async () => {
    const results = removeEndingZeros('100000010');
    expect(results).toBe('10000001');
  });

  it('format correctly #3', async () => {
    const results = removeEndingZeros('0');
    expect(results).toBe('');
  });

  it('format correctly #4', async () => {
    const results = removeEndingZeros('404');
    expect(results).toBe('404');
  });

  it('format correctly #5', async () => {
    const results = removeEndingZeros('1234567891234567890');
    expect(results).toBe('123456789123456789');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('utils: formatNumber', () => {
  it('format correctly #1', async () => {
    const results = formatNumber('51.000101');
    expect(results).toBe('51.000101');
  });

  it('format correctly #2', async () => {
    const results = formatNumber('51000101', 2);
    expect(results).toBe('51,000,101');
  });

  it('format correctly #3', async () => {
    const results = formatNumber('0', 2);
    expect(results).toBe('0');
  });

  it('format correctly #4', async () => {
    const results = formatNumber('10654');
    expect(results).toBe('10,654');
  });

  it('format correctly #5', async () => {
    const results = formatNumber('10654.123456789123456789');
    expect(results).toBe('10,654.123456789123456789');
  });

  it('format correctly #6', async () => {
    const results = formatNumber('10654.12345678000');
    expect(results).toBe('10,654.12345678');
  });

  it('format correctly #7', async () => {
    const results = formatNumber('0.12345678000');
    expect(results).toBe('0.12345678');
  });

  it('format correctly #8', async () => {
    const results = formatNumber('123456789');
    expect(results).toBe('123,456,789');
  });

  it('format correctly #9', async () => {
    const results = formatNumber('123456789.1', 0);
    expect(results).toBe('123,456,789');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('utils: formatToken', () => {
  it('format correctly #1', async () => {
    const results = formatToken(654654, 'udaric');
    expect(results.value).toBe('0.654654');
    expect(results.baseDenom).toBe('udaric');
    expect(results.displayDenom).toBe('daric');
  });

  it('format correctly #2', async () => {
    const results = formatToken('1000001', 'udaric');
    expect(results.value).toBe('1.000001');
    expect(results.baseDenom).toBe('udaric');
    expect(results.displayDenom).toBe('daric');
  });

  it('format correctly #3', async () => {
    const results = formatToken('1000001', 'upotic');
    expect(results.value).toBe('1000001');
    expect(results.baseDenom).toBe('upotic');
    expect(results.displayDenom).toBe('potic');
  });

  it('format correctly #4', async () => {
    const results = formatToken('1000001', 'ubar');
    expect(results.value).toBe('0.01000001');
    expect(results.baseDenom).toBe('ubar');
    expect(results.displayDenom).toBe('bar');
  });

  it('format correctly #5', async () => {
    const results = formatToken('12345678998765432132', 'rowan');
    expect(results.value).toBe('12.345678998765432132');
    expect(results.baseDenom).toBe('rowan');
    expect(results.displayDenom).toBe('rowan');
    expect(results.exponent).toBe(18);
  });

  it('format correctly #6', async () => {
    const results = formatToken('12345678998765432132', 'unknown');
    expect(results.value).toBe('12345678998765432132');
    expect(results.baseDenom).toBe('unknown');
    expect(results.displayDenom).toBe('unknown');
    expect(results.exponent).toBe(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
