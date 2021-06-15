import numeral from 'numeral';

export const formatBalanceData = (data: {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total?: number;
}) => {
  const balanceChart = [
    {
      key: 'balanceAvailable',
      display: `${numeral(data.available.value).format('0,0.[0000]')} ${data.available.denom.toUpperCase()}`,
      value: data.available.value,
    },
    {
      key: 'balanceDelegate',
      display: `${numeral(data.delegate.value).format('0,0.[0000]')} ${data.delegate.denom.toUpperCase()}`,
      value: data.delegate.value,
    },
    {
      key: 'balanceUnbonding',
      display: `${numeral(data.unbonding.value).format('0,0.[0000]')} ${data.unbonding.denom.toUpperCase()}`,
      value: data.unbonding.value,
    },
    {
      key: 'balanceReward',
      display: `${numeral(data.reward.value).format('0,0.[0000]')} ${data.reward.denom.toUpperCase()}`,
      value: data.reward.value,
    },
  ];

  if (data.commission) {
    balanceChart.push({
      key: 'balanceCommission',
      display: `${numeral(data.commission.value).format('0,0.[0000]')} ${data.commission.denom.toUpperCase()}`,
      value: data.commission.value,
    });
  }

  return balanceChart;
};
