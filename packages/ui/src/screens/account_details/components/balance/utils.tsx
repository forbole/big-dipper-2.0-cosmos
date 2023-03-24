import Big from 'big.js';
import { formatNumber } from '@/utils/format_token';

export const formatBalanceData = (data: {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total?: TokenUnit;
}) => {
  const balanceChart = [
    {
      key: 'balanceAvailable',
      display: `${formatNumber(
        data.available.value,
        data.available.exponent
        //Kept the "toUpperCase()" in order to show the token symbol in uppercase
      )} ${data.available.displayDenom.toUpperCase()}`,
      value: data.available.value,
    },
    {
      key: 'balanceDelegate',
      display: `${formatNumber(
        data.delegate.value,
        data.delegate.exponent
        //Kept the "toUpperCase()" in order to show the token symbol in uppercase
      )} ${data.delegate.displayDenom.toUpperCase()}`,
      value: data.delegate.value,
    },
    {
      key: 'balanceUnbonding',
      display: `${formatNumber(
        data.unbonding.value,
        data.unbonding.exponent
        //Kept the "toUpperCase()" in order to show the token symbol in uppercase
      )} ${data.unbonding.displayDenom.toUpperCase()}`,
      value: data.unbonding.value,
    },
    {
      key: 'balanceReward',
      display: data.reward
        ? `${formatNumber(
            data.reward.value,
            data.reward.exponent
            //Kept the "toUpperCase()" in order to show the token symbol in uppercase
          )} ${data.reward.displayDenom.toUpperCase()}`
        : '',
      value: data.reward?.value,
    },
  ];

  if (data.commission && Big(data.commission.value).gt(0)) {
    balanceChart.push({
      key: 'balanceCommission',
      display: `${formatNumber(
        data.commission.value,
        data.commission.exponent
        //Kept the "toUpperCase()" in order to show the token symbol in uppercase
      )} ${data.commission.displayDenom.toUpperCase()}`,
      value: data.commission.value,
    });
  }

  return balanceChart;
};
