import { useState } from 'react';
import {
  useGetCurrencyUsdQuery,
  useGetCurrencyCadQuery,
} from '@graphql/types';

export const useQueryExample = () => {
  const [exampleData, setData] = useState<any[]>([]);
  const [exampleTwo, setDataTwo] = useState<any[]>([]);
  useGetCurrencyUsdQuery(
    { onCompleted: (data) => {
      setData(data.rates.slice(0, 1));
    } },
  );

  useGetCurrencyCadQuery(
    { onCompleted: (data) => {
      setDataTwo(data.rates.slice(0, 1));
    } },
  );

  return {
    dataOne: exampleData,
    dataTwo: exampleTwo,
  };
};
