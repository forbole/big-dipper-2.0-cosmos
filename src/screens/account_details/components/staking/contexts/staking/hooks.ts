import {
  useState,
  useEffect,
} from 'react';

export const useStaking = () => {
  const fakeDelegations = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    amount: '12,000',
    commission: '10%',
    reward: '123',
  };

  const fakeRedelegations = {
    from: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    to: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    amount: '12,000',
    linkedUntil: 1615187146246,
  };

  const fakeUnbondings = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    amount: '12,000',
    commission: '10%',
    linkedUntil: 1615187146246,
  };

  const fakeData = {
    delegations: Array(50).fill(fakeDelegations),
    redelegations: Array(31).fill(fakeRedelegations),
    unbondings: Array(31).fill(fakeUnbondings),
  };

  const [state, setState] = useState({
    item: {},
  });
  const {
    item,
  } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      item: fakeData,
    }));
  }, []);

  return {
    item,
  };
};
