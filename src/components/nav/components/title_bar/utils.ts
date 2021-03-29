export const formatMarket = (data: {
  marketCap: string;
  communityPool: string;
  price: string;
  inflation: string;
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
