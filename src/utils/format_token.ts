import numeral from 'numeral';
import * as R from 'ramda';
import Big from 'big.js';
import { chainConfig } from '@configs';

export const formatToken = (value: number | string, denom = '') => {
  const selectedDenom = chainConfig.tokenUnits[denom];

  if (typeof value !== 'string' && typeof value !== 'number') {
    value = '0';
  }

  if (typeof value === 'number') {
    value = `${value}`;
  }

  const results = {
    value,
    denom,
  };

  if (!selectedDenom) {
    return results;
  }

  const ratio = 10 ** selectedDenom.exponent;
  results.value = Big(value).div(ratio).toPrecision();
  results.denom = selectedDenom.display;
  return results;
};

const DEFAULT_EXPONENT = chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent;

export const formatNumber = (tokenUnit: TokenUnit, toFixed = DEFAULT_EXPONENT): string => {
  const split = `${tokenUnit.value}`.split('.');
  const wholeNumber = R.pathOr('', [0], split);
  const decimal = R.pathOr('', [1], split);
  const formatWholeNumber = numeral(wholeNumber).format('0,0');
  if (decimal) {
    const formatDecimal = numeral(decimal.substring(0, toFixed)).value();

    return `${formatWholeNumber}.${formatDecimal}`;
  }

  return formatWholeNumber;
};
