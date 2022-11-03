import { useState } from 'react';
import * as R from 'ramda';
import {
  useTransactionsQuery,
  useTransactionsListenerSubscription,
  TransactionsListenerSubscription,
} from '@graphql/types/general_types';
import { convertMsgsToModels } from '@msg';
import { convertMsgType } from '@utils/convert_msg_type';
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

  // This is a bandaid as it can get extremely
  // expensive if there is too much data
  /**
   * Helps remove any possible duplication
   * and sorts by height in case it bugs out
   */
  const uniqueAndSort = R.pipe(
    R.uniqBy(R.prop('hash')),
    R.sort(R.descend(R.prop('height'))),
  );

  // ================================
  // tx subscription
  // ================================
  useTransactionsListenerSubscription({
    variables: {
      limit: 1,
      offset: 0,
    },
    onData: (data) => {
      const newItems = uniqueAndSort([
        ...(data.data.data ? formatTransactions(data.data.data) : []),
        ...state.items,
      ]);
      handleSetState({
        loading: false,
        items: newItems,
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
      offset: 1,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const itemsLength = data.transactions.length;
      const newItems = uniqueAndSort([
        ...state.items,
        ...formatTransactions(data),
      ]);
      handleSetState({
        loading: false,
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
      const newItems = uniqueAndSort([
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
      const msgType = x.messages.map((eachMsg) => {
        const eachMsgType = R.pathOr('none type', ['@type'], eachMsg);
        return eachMsgType;
      });
      const convertedMsgType = convertMsgType(msgType);
      return ({
        height: x.height,
        hash: x.hash,
        type: convertedMsgType,
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
