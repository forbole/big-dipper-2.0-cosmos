export const formatMarket = (data: {
  marketCap: number;
  communityPool: number;
  price: number;
  inflation: number;
}) => {
  return ([
    {
      key: 'price',
      data: data.price,
    },
    {
      key: 'marketCap',
      data: data.marketCap,
    },
    {
      key: 'inflation',
      data: data.inflation,
    },
    {
      key: 'communityPool',
      data: data.communityPool,
    },
  ]);
};
