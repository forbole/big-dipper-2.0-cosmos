import React from 'react';
import { useBlocks } from './hooks';
import { BlocksState } from './types';

const initialState: BlocksState = {
  hasNextPage: true,
  isNextPageLoading: false,
  items: [],
};

const BlocksContext = React.createContext<BlocksState>(initialState);

const BlocksProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useBlocks();

  return (
    <BlocksContext.Provider
      value={{
        hasNextPage,
        isNextPageLoading,
        items,
        loadNextPage,
        itemCount,
        loadMoreItems,
        isItemLoaded,
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
