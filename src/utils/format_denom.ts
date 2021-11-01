import numeral from 'numeral';
import { chainConfig } from '@configs';

/**
 * Helper Function to convert the base denom to their display denom
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const formatDenom = (value: number | string, denom = ''): TokenUnit => {
  const selectedDenom = chainConfig.tokenUnits[denom];

  if (typeof value !== 'string' && typeof value !== 'number') {
    value = 0;
  }

  if (typeof value === 'string') {
    value = numeral(value).value() as number;
  }

  const results = {
    value,
    denom,
    format: '0,0.[000000]',
  };

  if (!selectedDenom) {
    return results;
  }

  // if udaric is less than one edgecase
  if (value < 1) {
    value = 0;
  }

  const ratio = 10 ** selectedDenom.exponent;
  results.value = value / ratio;
  results.denom = selectedDenom.display;
  results.format = getNumeralDenomFormat(denom);
  return results;
};

/**
 * Helper function that returns the correct numeral format for displaying denoms
 * @param denom
 * @returns
 */
export const getNumeralDenomFormat = (denom: string) => {
  const selectedDenom = chainConfig.tokenUnits[denom];
  if (!selectedDenom) {
    return '0,0';
  }

  return `0,0${selectedDenom.exponent ? `.[${'0'.repeat(selectedDenom.exponent)}]` : ''}`;
};
