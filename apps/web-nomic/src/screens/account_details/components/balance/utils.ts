import { formatNumber } from 'ui/utils/format_token';

export const formatBalanceData = (data: { available: TokenUnit }) => {
  const balanceChart = [
    {
      key: 'balanceAvailable',
      display: `${formatNumber(
        data.available.value,
        data.available.exponent
      )} ${data.available.displayDenom.toUpperCase()}`,
      value: data.available.value,
    },
  ];

  return balanceChart;
};
