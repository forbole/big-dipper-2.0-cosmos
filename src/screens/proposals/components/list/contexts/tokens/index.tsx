import React from 'react';
import { useTokens } from './hooks';
import { TokensState } from './types';

const initialState: TokensState = {
  hasNextPage: true,
  isNextPageLoading: false,
  items: [],
  total: 0,
};

const TokensContext = React.createContext<TokensState>(initialState);

const TokensProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
    total,
    searchCallback,
  } = useTokens();

  return (
    <TokensContext.Provider
      value={{
        hasNextPage,
        isNextPageLoading,
        items,
        loadNextPage,
        itemCount,
        loadMoreItems,
        isItemLoaded,
        total,
        searchCallback,
      }}
    >
      {children}
    </TokensContext.Provider>
  );
};

const useTokensContext = () => React.useContext(TokensContext);

export {
  useTokensContext,
  TokensProvider,
  TokensContext,
};
