import Big from 'big.js';
import { formatNumber } from '@utils/format_token';

export const formatMarket = (data: {
  marketCap: number;
  communityPool: TokenUnit;
  supply: TokenUnit;
  inflation: number;
}) => {
  const marketCap = data.marketCap !== null ? `$${formatNumber(data.marketCap.toString(), 2)}` : 'N/A';

  return ([
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'inflation',
      data: `${formatNumber(Big(data.inflation).times(100).toPrecision(), 1)}%`,
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
