import React from 'react';
import { useBlocks } from './hooks';
import { BlocksState } from './types';

const initialState: BlocksState = {
  hasNextPage: false,
  isNextPageLoading: false,
  items: [],
  rawDataTotal: 0,
};

const BlocksContext = React.createContext<BlocksState>(initialState);

const BlocksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    hasNextPage,
    isNextPageLoading,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
    formatUi,
    rawData,
    rawDataTotal,
  } = useBlocks(initialState);

  return (
    <BlocksContext.Provider
      value={{
        hasNextPage,
        isNextPageLoading,
        loadNextPage,
        itemCount,
        loadMoreItems,
        isItemLoaded,
        formatUi,
        items: rawData,
        rawDataTotal,
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
