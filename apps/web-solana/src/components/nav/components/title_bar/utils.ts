import numeral from 'numeral';
import { formatNumber } from '@utils/format_token';

export const formatMarket = (data: {
  marketCap: number;
  maxSupply: TokenUnit;
  price: number;
  inflation: number;
}) => {
  const marketCap = data.marketCap !== null ? `$${numeral(data.marketCap).format('0,0.[00]')}` : 'N/A';
  return ([
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'maxSupply',
      data: `${formatNumber(data.maxSupply.value, 0)} ${data.maxSupply.displayDenom.toUpperCase()}`,
    },
    {
      key: 'price',
      data: `$${numeral(data.price).format('0,0.[00]')}`,
    },
    {
      key: 'inflation',
      data: `${numeral(data.inflation * 100).format('0.[00]')}%`,
    },
  ]);
};
