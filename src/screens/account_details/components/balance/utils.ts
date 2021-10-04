import numeral from 'numeral';

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
      display: `${numeral(data.available.value).format(data.available.format)} ${data.available.denom.toUpperCase()}`,
      value: data.available.value,
    },
    {
      key: 'balanceDelegate',
      display: `${numeral(data.delegate.value).format(data.delegate.format)} ${data.delegate.denom.toUpperCase()}`,
      value: data.delegate.value,
    },
    {
      key: 'balanceUnbonding',
      display: `${numeral(data.unbonding.value).format(data.unbonding.format)} ${data.unbonding.denom.toUpperCase()}`,
      value: data.unbonding.value,
    },
    {
      key: 'balanceReward',
      display: `${numeral(data.reward.value).format(data.reward.format)} ${data.reward.denom.toUpperCase()}`,
      value: data.reward.value,
    },
  ];

  if (data.commission && data.commission.value !== 0) {
    balanceChart.push({
      key: 'balanceCommission',
      display: `${numeral(data.commission.value).format(data.commission.format)} ${data.commission.denom.toUpperCase()}`,
      value: data.commission.value,
    });
  }

  return balanceChart;
};
