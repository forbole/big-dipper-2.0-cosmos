export const formatMarket = (data: {
  marketCap: string;
  communityPool: string;
  supply: string;
  inflation: string;
}) => {
  return ([
    {
      key: 'marketCap',
      data: data.marketCap,
    },
    {
      key: 'inflation',
      data: data.inflation,
    },
    {
      key: 'supply',
      data: data.supply,
    },
    {
      key: 'communityPool',
      data: data.communityPool,
    },
  ]);
};
