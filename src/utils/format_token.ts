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

  const results = {
    value,
    displayDenom: denom,
    baseDenom: denom,
  };

  if (!selectedDenom) {
    return results;
  }

  const ratio = 10 ** selectedDenom.exponent;
  results.value = Big(value).div(ratio).toPrecision();
  results.displayDenom = selectedDenom.display;
  return results;
};

const DEFAULT_EXPONENT = chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent;

export const formatNumber = (tokenUnit: TokenUnit, toFixed?: number): string => {
  const split = `${tokenUnit.value}`.split('.');
  const wholeNumber = R.pathOr('', [0], split);
  const decimal = R.pathOr('', [1], split);
  const formatWholeNumber = numeral(wholeNumber).format('0,0');
  if (decimal) {
    if (toFixed == null) {
      toFixed = R.pathOr(
        DEFAULT_EXPONENT,
        ['tokenUnits', tokenUnit.baseDenom, 'exponent'],
        chainConfig,
      );
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
