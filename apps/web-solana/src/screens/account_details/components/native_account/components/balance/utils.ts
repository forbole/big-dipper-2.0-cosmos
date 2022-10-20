import { formatNumber } from '@utils/format_token';
import { BalanceType } from '../../../../types';

export const formatBalanceData = (data: BalanceType) => {
  const balanceChart = [
    {
      key: 'balanceNative',
      display: `${formatNumber(data.native.value, data.native.exponent)} ${data.native.displayDenom.toUpperCase()}`,
      value: data.native.value,
    },
    {
      key: 'balanceStake',
      display: `${formatNumber(data.stake.value, data.stake.exponent)} ${data.stake.displayDenom.toUpperCase()}`,
      value: data.stake.value,
    },
    {
      key: 'balanceNonce',
      display: `${formatNumber(data.nonce.value, data.nonce.exponent)} ${data.nonce.displayDenom.toUpperCase()}`,
      value: data.nonce.value,
    },
    {
      key: 'balanceVote',
      display: `${formatNumber(data.vote.value, data.vote.exponent)} ${data.vote.displayDenom.toUpperCase()}`,
      value: data.vote.value,
    },
  ];

  return balanceChart;
};
