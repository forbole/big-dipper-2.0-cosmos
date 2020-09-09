import {
  useState,
  useEffect,
} from 'react';

export const useBlocks = () => {
  const fakeData = {
    slot: '812,768,640',
    leader: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    parentHash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    tx: 2,
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
          const newItems = [...prevState.items, ...Array(20).fill(fakeData)];
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
