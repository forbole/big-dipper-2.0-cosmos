export const formatMarket = (data: {
  marketCap: string;
  communityPool: string;
  price: string;
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
      key: 'totalSupply',
      data: data.price,
    },
    {
      key: 'communityPool',
      data: data.communityPool,
    },
  ]);
};
