import Big from 'big.js';
import { type AtomState } from '@/recoil/market';
import { formatNumber } from '@/utils/format_token';

export const formatMarket = (data: AtomState) => {
  const marketCap = `$${formatNumber(
    (Number(data.supply.value) * Number(data.price)).toFixed(),
    2
  )}`;

  return [
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'inflation',
      data: `${formatNumber(Big(data.inflation)?.times(100).toPrecision(), 0)}%`,
    },
    {
      key: 'apr',
      data: `${formatNumber(Big(data.apr)?.times(100).toPrecision(), 2)}%`,
    },
    {
      key: 'supply',
      //Removed ".toUpperCase()" from the end of the line below per Reza's request
      data: `${formatNumber(data.supply.value, 2)} ${data.supply.displayDenom}`,
    },
    {
      key: 'communityPool',
      //Removed ".toUpperCase()" from the end of the line below per Reza's request
      data: `${formatNumber(data.communityPool.value, 2)} ${data.communityPool.displayDenom}`,
    },
  ];
};
