import numeral from 'numeral';
import { type AtomState } from '@/recoil/market';

export const formatMarket = (data: AtomState) => [
  {
    key: 'marketCap',
    data: `$${numeral(data.marketCap).format('0,0')}`,
  },
  {
    key: 'apr',
    data: numeral(data.apr).format('0%'),
  },
  {
    key: 'price',
    data: `$${numeral(data.price).format('0,0.00')}`,
  },
  {
    key: 'supply',
    data: numeral(data.supply).format('0,0'),
  },
];
