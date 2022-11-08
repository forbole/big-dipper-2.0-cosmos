import numeral from 'numeral';

export const usePrice = () => {
  const tickPriceFormatter = (num: number) => {
    return `$${numeral(num).format('0,0')}`;
  };

  return {
    tickPriceFormatter,
  };
};
