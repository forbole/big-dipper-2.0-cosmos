import {
  useState,
  useEffect,
} from 'react';

export const useBlock = () => {
  const fakeSignature = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '10%',
    signed: true,
  };

  const fakeSignatureTwo = {
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    votingPower: '50%',
    signed: false,
  };

  const fakeTransactions = {
    block: '812,768,640',
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    messages: 123,
    success: false,
    time: 1615187146246,
  };

  const fakeTransactionsTwo = {
    block: '812,768,640',
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    messages: 12,
    success: true,
    time: 1615187146246,
  };

  const fakeData = {
    height: '812,768,640',
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    txs: 2,
    time: 1615187146246,
    signedVotingPower: '89%',
    signatures: [...Array(4).fill(fakeSignature), ...Array(4).fill(fakeSignatureTwo)],
    transactions: [...Array(4).fill(fakeTransactions), ...Array(4).fill(fakeTransactionsTwo)],
  };

  const [state, setState] = useState<any>({
    item: {},
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      item: fakeData,
    }));
  }, []);

  const {
    item,
  } = state;

  return {
    item,
  };
};
