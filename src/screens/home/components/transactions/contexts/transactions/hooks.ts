import {
  useState,
} from 'react';

export const useTransactions = () => {
  const fakeData = {
    block: '812,768,640',
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    messages: 123,
    success: false,
    time: 1615187146246,
  };
  const fakeDataTwo = {
    block: '812,768,640',
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    messages: 12,
    success: true,
    time: 1615187146246,
  };
  // eslint-disable-next-line
  const [transactions, setTransactions] = useState<any[]>([
    ...Array(4).fill(fakeData),
    ...Array(3).fill(fakeDataTwo),
  ]);

  return {
    transactions,
  };
};
