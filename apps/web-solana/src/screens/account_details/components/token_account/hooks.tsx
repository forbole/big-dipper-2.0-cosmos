import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useTokenDetailsQuery,
  TokenDetailsQuery,
} from '@graphql/types';
import {
  TokenDetailState,
} from './types';

const dummyTransaction = {
  slot: 123548722,
  signature: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
  success: true,
  timestamp: '2021-09-13T20:06:17.363145',
  messages: {
    count: 0,
    items: [],
  },
};

export const useTokenAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<TokenDetailState>({
    loading: true,
    // loading: false,
    exists: true,
    header: {
      token: '',
      imageUrl: '',
      mint: '',
    },
    overview: {
      mint: '',
      decimals: 0,
      mintAuthority: '',
      freezeAuthority: '',
    },
    market: {
      price: 0,
      marketCap: 0,
      supply: 0,
      holders: 0,
    },
    transactions: {
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
      data: Array(20).fill(dummyTransaction),
    },
  });
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    // reset every call
    handleSetState({
      loading: true,
      exists: true,
    });
  }, [router.query.address]);

  // ==========================
  // Fetch Data
  // ==========================
  useTokenDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatDetails(data));
    },
  });

  const formatDetails = (data:TokenDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    // header
    const formatHeader = () => {
      return ({
        token: R.pathOr('', ['tokenUnit', 0, 'unitName'], data),
        imageUrl: R.pathOr('', ['tokenUnit', 0, 'logo'], data),
        mint: R.pathOr(router.query.address, ['tokenUnit', 0, 'mint'], data),
      });
    };
    stateChange.header = formatHeader();

    // overview
    const formatOverview = () => {
      return ({
        mint: R.pathOr(router.query.address, ['token', 0, 'mint'], data),
        decimals: R.pathOr(0, ['token', 0, 'decimals'], data),
        mintAuthority: R.pathOr('', ['token', 0, 'mintAuthority'], data),
        freezeAuthority: R.pathOr('', ['token', 0, 'freezeAuthority'], data),
      });
    };
    stateChange.overview = formatOverview();

    // market
    const formatMarket = () => {
      return ({
        price: R.pathOr(0, ['tokenUnit', 0, 'tokenPrice', 'price'], data),
        marketCap: R.pathOr(0, ['tokenUnit', 0, 'tokenPrice', 'marketCap'], data),
        supply: R.pathOr(0, ['tokenSupply', 0, 'supply'], data),
        holders: R.pathOr(0, ['tokenAccountAggregate', 'aggregate', 'count'], data),
      });
    };
    stateChange.market = formatMarket();

    return stateChange;
  };

  const loadNextPageTx = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    // await transactionQuery.fetchMore({
    //   variables: {
    //     offset: state.transactions.offsetCount,
    //     limit: LIMIT + 1,
    //   },
    // }).then(({ data }) => {
    //   const itemsLength = data.messagesByAddress.length;
    //   const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
    //   const stateChange = {
    //     transactions: {
    //       data: newItems,
    //       hasNextPage: itemsLength === 51,
    //       isNextPageLoading: false,
    //       offsetCount: state.transactions.offsetCount + LIMIT,
    //     },
    //   };
    //   handleSetState(stateChange);
    // });
  };

  const loadNextPageHolders = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    // await transactionQuery.fetchMore({
    //   variables: {
    //     offset: state.transactions.offsetCount,
    //     limit: LIMIT + 1,
    //   },
    // }).then(({ data }) => {
    //   const itemsLength = data.messagesByAddress.length;
    //   const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
    //   const stateChange = {
    //     transactions: {
    //       data: newItems,
    //       hasNextPage: itemsLength === 51,
    //       isNextPageLoading: false,
    //       offsetCount: state.transactions.offsetCount + LIMIT,
    //     },
    //   };
    //   handleSetState(stateChange);
    // });
  };

  return {
    state,
    loadNextPageTx,
    loadNextPageHolders,
  };
};
