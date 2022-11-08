import { formatNumber } from 'ui/utils/format_token';
import numeral from 'numeral';

export const formatMarket = (data: { price: number; supply: TokenUnit; marketCap: number }) => {
  const price = data.price !== null ? `$${numeral(data.price).format('0.00')}` : 'N/A';
  const supply =
    data.supply !== null
      ? `${formatNumber(data.supply.value, 2)} ${data.supply.displayDenom.toUpperCase()}`
      : 'N/A';
  const marketCap =
    data.marketCap !== null ? `$${formatNumber(data.marketCap.toString(), 2)}` : 'N/A';

  return [
    {
      key: 'price',
      data: price,
    },
    {
      key: 'supply',
      data: supply,
    },
    {
      key: 'marketCap',
      data: marketCap,
    },
  ];
};
