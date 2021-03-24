import {
  useState,
  useEffect,
} from 'react';

export const useProposals = () => {
  const fakeData = {
    id: 3,
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    title: 'Enable IBC transfers',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat velit ipsum, tempus tristique tellus rhoncus tempus. Duis elementum varius neque, eu pharetra eros porttitor in.',
    submissionTime: 1615187146246,
    votingTimeStart: 1615187146246,
    status: 1,
  };

  const fakeDataTwo = {
    id: 6,
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    title: 'Takeoff Proposal from Cyber to Cosmos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat velit ipsum, tempus tristique tellus rhoncus tempus. Duis elementum varius neque, eu pharetra eros porttitor in.',
    submissiongTime: 1615187146246,
    status: 2,
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
