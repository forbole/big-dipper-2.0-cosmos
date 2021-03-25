import {
  useState,
  useEffect,
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

  const [state, setState] = useState({
    items: [],
    isNextPageLoading: false,
    hasNextPage: true,
  });
  const {
    items,
    isNextPageLoading,
    hasNextPage,
  } = state;
  const TOTAL = 1000;

  useEffect(() => {
    if (isNextPageLoading) {
      setTimeout(() => {
        setState((prevState) => {
          let newItems = [];

          if ((prevState.items.length / 10) % 2) {
            newItems = [...prevState.items, ...Array(10).fill(fakeData)];
          } else {
            newItems = [...prevState.items, ...Array(10).fill(fakeDataTwo)];
          }

          return (
            {
              ...prevState,
              hasNextPage: newItems.length < TOTAL,
              isNextPageLoading: false,
              items: newItems,
            }
          );
        });
      }, 2500);
    }
  }, [state]);

  const loadNextPage = (...args) => {
    console.log(...args, 'args');
    setState((prevState) => {
      return {
        ...prevState,
        isNextPageLoading: true,
      };
    });
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;
  const loadMoreItems = isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  return {
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  };
};
