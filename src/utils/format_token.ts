import numeral from 'numeral';
import * as R from 'ramda';
import Big from 'big.js';
import { chainConfig } from '@configs';

export const formatToken = (value: number | string, denom = ''): TokenUnit => {
  const selectedDenom = chainConfig.tokenUnits[denom];

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
    exponent: R.pathOr(0, ['exponent'], selectedDenom),
  };

  if (!selectedDenom) {
    return results;
  }

  const ratio = 10 ** selectedDenom.exponent;
  results.value = Big(value).div(ratio).toPrecision();
  results.displayDenom = selectedDenom.display;
  return results;
};

export const formatNumber = (tokenUnit: string, toFixed?: number): string => {
  const split = `${tokenUnit}`.split('.');
  const wholeNumber = R.pathOr('', [0], split);
  const decimal = R.pathOr('', [1], split);
  const formatWholeNumber = numeral(wholeNumber).format('0,0');
  if (decimal && toFixed !== 0) {
    if (toFixed == null) {
      toFixed = decimal.length;
    }
    const formatDecimal = removeEndingZeros(decimal.substring(0, toFixed));
    return `${formatWholeNumber}.${formatDecimal}`;
  }
  return formatWholeNumber;
};

export const removeEndingZeros = (value: string) => {
  let end = value.length;
  for (let i = value.length; i > 0; i -= 1) {
    const currentDigit = value[i - 1];
    if (currentDigit !== '0') {
      break;
    }
    end -= 1;
  }
  return value.substring(0, end);
};
