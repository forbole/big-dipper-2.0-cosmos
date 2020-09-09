import {
  useState,
  useEffect,
} from 'react';

export const useTransactions = () => {
  const fakeData = {
    address: '6gfi6GSjrhqc5xDLtDkVrTR61Hi7GMNPmJknxvbqzb1x',
    quantity: '430,012,872.844027',
    percentage: 3.1754,
    value: '$429,656,822.19',
  };

  // eslint-disable-next-line
  const [state, setState] = useState({
    items: [],
    total: 0,
  });
  const {
    items,
    total,
  } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      items: Array(100).fill(fakeData),
      total: 100,
    }));
  }, []);

  const pageChangeCallback = (page: number, rowsPerPage: number) => {
    console.log(`pageChangeCallback with page ${page} and rows ${rowsPerPage}`);
  };

  const rowsChangeCallback = (page: number, rowsPerPage: number) => {
    console.log(`rowsChangeCallback with page ${page} and rows ${rowsPerPage}`);
  };

  return {
    pageChangeCallback,
    rowsChangeCallback,
    items,
    total,
  };
};
