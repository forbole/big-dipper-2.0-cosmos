import { useState } from 'react';
import * as R from 'ramda';
import {
  useTokensQuery,
  TokensQuery,
} from '@graphql/types';
import {
  TokensState, TokenType,
} from './types';

export const useProposals = () => {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<TokensState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
    sortKey: 'token',
    sortDirection: 'asc',
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // proposals query
  // ================================

  useTokensQuery({
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        items: formatTokens(data),
      });
    },
  });

  const formatTokens = (data:TokensQuery) => {
    return data.tokenUnit.map((x) => {
      return ({
        token: x.unitName,
        address: x.address,
        logo: x.logo,
        price: R.pathOr(null, ['tokenPrice', 'price'], x),
        marketCap: R.pathOr(null, ['tokenPrice', 'marketCap'], x),
        volume: R.pathOr(null, ['tokenPrice', 'volume'], x),
      });
    });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleSort = (key: string) => {
    if (key === state.sortKey) {
      handleSetState({
        sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc',
      });
    } else {
      handleSetState({
        sortKey: key,
        sortDirection: 'asc', // new key so we start the sort by asc
      });
    }
  };

  const sortItems = (items: TokenType[]) => {
    let sorted: TokenType[] = R.clone(items);

    if (search) {
      sorted = sorted.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return (
          x.token.toLowerCase().replace(/ /g, '').includes(formattedSearch)
          || x.address.toLowerCase().includes(formattedSearch)
        );
      });
    }

    if (state.sortKey && state.sortDirection) {
      let defaultValue;
      const edgeCases = ['price', 'marketCap', 'volume'];
      if (edgeCases.includes(state.sortKey)) {
        defaultValue = 0;
      }
      sorted.sort((a, b) => {
        let compareA = R.pathOr(defaultValue, [...state.sortKey.split('.')], a);
        let compareB = R.pathOr(defaultValue, [...state.sortKey.split('.')], b);

        if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        if (compareA < compareB) {
          return state.sortDirection === 'asc' ? -1 : 1;
        }
        if (compareA > compareB) {
          return state.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sorted;
  };

  return {
    state,
    handleSearch,
    sortItems,
    handleSort,
  };
};
