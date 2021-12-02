import Big from 'big.js';
import { formatNumber } from '@utils/format_token';

export const formatMarket = (data: {
  marketCap: number;
  communityPool: TokenUnit;
  supply: TokenUnit;
  inflation: number;
  apr: number;
}) => {
  const marketCap = data.marketCap !== null ? `$${formatNumber(data.marketCap.toString(), 2)}` : 'N/A';
  const { apr } = data;
  console.log('data.inflation', data.inflation);
  console.log('Big(data.inflation)', Big(data.inflation));
  console.log('Big(data.inflation).times(100)', Big(data.inflation).times(100));
  console.log('Big(data.inflation).times(100).toPrecision()', Big(data.inflation).times(100).toPrecision());
  console.log('formatNumber(Big(data.inflation).times(100).toPrecision(), 0)', formatNumber(Big(data.inflation).times(100).toPrecision(), 0));
  console.log('apr', Big(data.apr).times(100).toPrecision());

  return ([
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'apr',
      data: `${apr * 100}%`,
    },
    {
      key: 'inflation',
      data: `${formatNumber(Big(data.inflation).times(100).toPrecision(), 0)}%`,
    },
    {
      key: 'supply',
      data: `${formatNumber(data.supply.value, 2)} ${data.supply.displayDenom.toUpperCase()}`,
    },
    {
      key: 'communityPool',
      data: `${formatNumber(data.communityPool.value, 2)} ${data.communityPool.displayDenom.toUpperCase()}`,
    },
  ]);
};
