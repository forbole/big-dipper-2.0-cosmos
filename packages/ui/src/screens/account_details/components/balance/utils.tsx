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
        //Removed ".toUpperCase()" from the end of the line below per Reza's request
      )} ${data.available.displayDenom}`,
      value: data.available.value,
    },
    {
      key: 'balanceDelegate',
      display: `${formatNumber(
        data.delegate.value,
        data.delegate.exponent
        //Removed ".toUpperCase()" from the end of the line below per Reza's request
      )} ${data.delegate.displayDenom}`,
      value: data.delegate.value,
    },
    {
      key: 'balanceUnbonding',
      display: `${formatNumber(
        data.unbonding.value,
        data.unbonding.exponent
        //Removed ".toUpperCase()" from the end of the line below per Reza's request
      )} ${data.unbonding.displayDenom}`,
      value: data.unbonding.value,
    },
    {
      key: 'balanceReward',
      display: data.reward
        ? `${formatNumber(
            data.reward.value,
            data.reward.exponent
            //Removed ".toUpperCase()" from the end of the line below per Reza's request
          )} ${data.reward.displayDenom}`
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
        //Removed ".toUpperCase()" from the end of the line below per Reza's request
      )} ${data.commission.displayDenom}`,
      value: data.commission.value,
    });
  }

  return balanceChart;
};
