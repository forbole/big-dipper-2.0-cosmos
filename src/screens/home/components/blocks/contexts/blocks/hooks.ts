import {
  useState,
} from 'react';

export const useBlocks = () => {
  const fakeData = {
    height: '812,768,640',
    validator: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    tx: 2,
    time: 1615187146246,
  };
  // eslint-disable-next-line
  const [blocks, setBlocks] = useState<any[]>(Array(7).fill(fakeData));

  return {
    blocks,
  };
};
