import React from 'react';
import { useBlocks } from './hooks';
import { BlocksState } from './types';

const initialState: BlocksState = {
  blocks: [],
  rawData: [],
  uiData: [],
};

const BlocksContext = React.createContext<BlocksState>(initialState);

const BlocksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    blocks,
    rawData,
    uiData,
  } = useBlocks(initialState);

  return (
    <BlocksContext.Provider
      value={{
        blocks,
        rawData,
        uiData,
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
