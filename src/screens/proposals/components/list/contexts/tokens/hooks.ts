import {
  useState,
  useEffect,
} from 'react';

export const useTokens = () => {
  const fakeData = {
    token: 'BTC',
    price: '$1,802',
    change: 10,
    volume: '$15,902,496,558',
    marketCap: '$515,912,496',
    holders: '2,178,994',
    address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
  };

  const fakeDataTwo = {
    token: 'ETH',
    price: '$1,802',
    change: -25,
    volume: '$15,902,496,558',
    marketCap: '$515,912,496',
    holders: '2,178,994',
    address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
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

  const searchCallback = (value: string) => {
    console.log('search calledback ', value);
  };

  return {
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
    total: TOTAL,
    searchCallback,
  };
};
