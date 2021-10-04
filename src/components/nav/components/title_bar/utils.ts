import numeral from 'numeral';

export const formatMarket = (data: {
  marketCap: number;
  communityPool: TokenUnit;
  supply: TokenUnit;
  inflation: number;
}) => {
  const marketCap = data.marketCap !== null ? `$${numeral(data.marketCap).format('0,0.[00]')}` : 'N/A';
  return ([
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'inflation',
      data: `${numeral(data.inflation * 100).format('0')}%`,
    },
    {
      key: 'supply',
      data: `${numeral(data.supply.value).format(data.supply.format)} ${data.supply.denom.toUpperCase()}`,
    },
    {
      key: 'communityPool',
      data: `${numeral(data.communityPool.value).format(data.communityPool.format)} ${data.communityPool.denom.toUpperCase()}`,
    },
  ]);
};
