import { formatNumber } from '@/utils/format_token';

export const formatBalanceData = (data: { available: TokenUnit; delegate: TokenUnit }) => {
  const balanceChart = [
    {
      key: 'balanceAvailable',
      display: `${formatNumber(
        data.available.value,
        data.available.exponent
      )} ${data.available.displayDenom.toUpperCase()}`,
      value: data.available.value,
    },
    {
      key: 'balanceDelegate',
      display: `${formatNumber(
        data.delegate.value,
        data.delegate.exponent
      )} ${data.delegate.displayDenom.toUpperCase()}`,
      value: data.delegate.value,
    },
  ];

  return balanceChart;
};
