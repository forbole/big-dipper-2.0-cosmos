import { useState } from 'react';
import * as R from 'ramda';
import {
  useTransactionsQuery,
  useTransactionsListenerSubscription,
  TransactionsListenerSubscription,
} from '@graphql/types';
import { convertMsgsToModels } from '@msg';
import { TransactionsState } from './types';

export const useTransactions = () => {
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    exists: true,
    hasNextPage: false,
    isNextPageLoading: false,
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // tx subscription
  // ================================
  useTransactionsListenerSubscription({
    variables: {
      limit: 1,
      offset: 0,
    },
    onSubscriptionData: (data) => {
      handleSetState({
        loading: false,
        items: [
          ...formatTransactions(data.subscriptionData.data),
          ...state.items,
        ],
      });
    },
  });

  // ================================
  // tx query
  // ================================
  const LIMIT = 51;
  const transactionQuery = useTransactionsQuery({
    variables: {
      limit: LIMIT,
      // offset: 1,
      offset: state.items.length,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const itemsLength = data.transactions.length;
      const newItems = R.uniq([...state.items, ...formatTransactions(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await transactionQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: LIMIT,
      },
    }).then(({ data }) => {
      const itemsLength = data.transactions.length;
      const newItems = R.uniq([
        ...state.items,
        ...formatTransactions(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        hasNextPage: itemsLength === 51,
      });
    });
  };

  const formatTransactions = (data: TransactionsListenerSubscription) => {
    let formattedData = data.transactions;
    if (data.transactions.length === 51) {
      formattedData = data.transactions.slice(0, 51);
    }

    return formattedData.map((x) => {
      const messages = convertMsgsToModels(x);
      return ({
        height: x.height,
        hash: x.hash,
        messages: {
          count: x.messages.length,
          items: messages,
        },
        success: x.success,
        timestamp: x.block.timestamp,
      });
    });
  };

  return {
    state,
    loadNextPage,
  };
};
