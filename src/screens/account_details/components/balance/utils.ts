import numeral from 'numeral';
import { chainConfig } from '@src/chain_config';

export const formatBalanceData = (data: {
  available: number;
  delegate: number;
  unbonding: number;
  reward: number;
  commission?: number;
  total: number;
}) => {
  const balanceChart = [
    {
      key: 'balanceAvailable',
      display: `${numeral(data.available).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      value: data.available,
    },
    {
      key: 'balanceDelegate',
      display: `${numeral(data.delegate).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      value: data.delegate,
    },
    {
      key: 'balanceUnbonding',
      display: `${numeral(data.unbonding).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      value: data.unbonding,
    },
    {
      key: 'balanceReward',
      display: `${numeral(data.reward).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      value: data.reward,
    },
  ];

  if (data.commission) {
    balanceChart.push({
      key: 'balanceCommission',
      display: `${numeral(data.commission).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`,
      value: data.commission,
    });
  }

  return balanceChart;
};
