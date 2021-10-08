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
    rawDataTotal: 0,
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
  const transactionQuery = useTransactionsQuery({
    variables: {
      limit: 50,
      offset: 1,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatTransactions(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: newItems.length < data.total.aggregate.count,
        isNextPageLoading: false,
        rawDataTotal: data.total.aggregate.count,
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
        limit: 50,
      },
    }).then(({ data }) => {
      const newItems = R.uniq([
        ...state.items,
        ...formatTransactions(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        hasNextPage: newItems.length < data.total.aggregate.count,
        rawDataTotal: data.total.aggregate.count,
      });
    });
  };

  const formatTransactions = (data: TransactionsListenerSubscription) => {
    return data.transactions.map((x) => {
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
