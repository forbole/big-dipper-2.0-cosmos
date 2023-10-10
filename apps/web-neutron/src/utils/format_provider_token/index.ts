import Big from 'big.js';
import chainConfig from '@/chainConfig';

const provider = chainConfig();

/**
 * Util to help me correctly transform a base denom amount
 * in to a display denom amount
 * @param value the current amount
 * @param denom the denom to convert the amount in to
 * @returns TokenUnit
 */
export const formatProviderToken = (
  value: number | string | null | undefined,
  denom = ''
): TokenUnit => {
  const selectedDenom = provider?.tokenUnits[denom];

  if (typeof value !== 'string' && typeof value !== 'number') {
    value = '0';
  }

  if (typeof value === 'number') {
    value = `${value}`;
  }

  const results: TokenUnit = {
    value,
    displayDenom: denom,
    baseDenom: denom,
    exponent: selectedDenom?.exponent ?? 0,
  };

  if (!selectedDenom) {
    return results;
  }

  const ratio = Big(10 ** selectedDenom.exponent);
  results.value = !ratio.eq(0) ? Big(value).div(ratio).toFixed(selectedDenom.exponent) : '';
  results.displayDenom = selectedDenom.display;

  return results;
};
