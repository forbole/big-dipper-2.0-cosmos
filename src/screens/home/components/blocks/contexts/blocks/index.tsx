import React from 'react';
import { useBlocks } from './hooks';
import { BlocksState } from './types';

const initialState: BlocksState = {
  rawData: [],
};

const BlocksContext = React.createContext<BlocksState>(initialState);

const BlocksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    rawData,
    formatUi,
  } = useBlocks(initialState);

  return (
    <BlocksContext.Provider
      value={{
        rawData,
        formatUi,
      }}
    >
      {children}
    </BlocksContext.Provider>
  );
};

const useBlocksContext = () => React.useContext(BlocksContext);

export {
  useBlocksContext,
  BlocksProvider,
  BlocksContext,
};
