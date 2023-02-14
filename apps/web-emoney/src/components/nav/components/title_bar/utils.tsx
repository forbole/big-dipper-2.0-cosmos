import Big from 'big.js';
import numeral from 'numeral';
import { type AtomState } from '@/recoil/market';
import { formatNumber } from '@/utils/format_token';

export const formatMarket = (data: AtomState) => {
  const exludedItems = [null, 0];
  const marketCap = exludedItems.includes(data.marketCap)
    ? 'N/A'
    : `$${formatNumber(data.marketCap?.toString() ?? '', 2)}`;

  return [
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'inflation',
      data: `${formatNumber(Big(data.inflation)?.times(100).toPrecision(), 1)}%`,
    },
    {
      key: 'apr',
      data: `${formatNumber(Big(data.apr)?.times(100).toPrecision(), 2)}%`,
    },
    {
      key: 'supply',
      data: `${formatNumber(data.supply.value, 2)} ${data.supply.displayDenom.toUpperCase()}`,
    },
    {
      key: 'communityPool',
      data: `${numeral(data.communityPool.value).format(
        '0,0.00'
      )} ${data.communityPool.displayDenom.toUpperCase()}`,
    },
  ];
};
