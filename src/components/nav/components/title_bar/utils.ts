import numeral from 'numeral';
import { chainConfig } from '@src/configs';

export const formatMarket = (data: {
  marketCap: number;
  communityPool: number;
  supply: number;
  inflation: number;
}) => {
  return ([
    {
      key: 'marketCap',
      data: `$${numeral(data.marketCap).format('0,0.[00]')}`,
    },
    {
      key: 'inflation',
      data: `${numeral(data.inflation * 100).format('0')}%`,
    },
    {
      key: 'supply',
      data: `${numeral(data.supply).format('0,0.[00]')} ${chainConfig.display.toUpperCase()}`,
    },
    {
      key: 'communityPool',
      data: `${numeral(data.communityPool).format('0,0.00')} ${chainConfig.display.toUpperCase()}`,
    },
  ]);
};
