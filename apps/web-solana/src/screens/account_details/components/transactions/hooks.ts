import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTxByAddressQuery } from '@graphql/types';
import * as R from 'ramda';
import { TransactionsState } from './types';

const LIMIT = 25;

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionsState>({
    loading: true,
    transactions: [],
    hasNextPage: false,
    isNextPageLoading: false,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const transactionQuery = useTxByAddressQuery({
    variables: {
      address: router.query.address as string,
      current: '',
      limit: LIMIT + 1, // to check if more exist
    },
    onCompleted: (data) => {
      const transactions = R.pathOr([], ['transactionsByAddress'], data);

      const hasNextPage = transactions.length === LIMIT + 1;
      // optimise later
      const newItems = formatTransactions(transactions);

      const stateChange = {
        hasNextPage,
        transactions: newItems,
        isNextPageLoading: false,
        loading: false,
      };

      handleSetState(stateChange);
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
  });

  const loadNextPage = async () => {
    if (state.transactions.length) {
      handleSetState({
        isNextPageLoading: true,
      });

      const current = state.transactions[state.transactions.length - 1].signature;

      // refetch query
      await transactionQuery.fetchMore({
        variables: {
          current,
          limit: LIMIT + 1,
        },
      }).then(({ data }) => {
        const transactions = R.pathOr([], ['transactionsByAddress'], data);
        const hasNextPage = transactions.length === LIMIT + 1;
        const formattedTransactions = formatTransactions(transactions);
        const newCurrent = formattedTransactions[formattedTransactions.length - 1].signature;

        const stateChange: any = {
          hasNextPage,
          isNextPageLoading: false,
        };

        if (current !== newCurrent) {
          stateChange.transactions = [...state.transactions, ...formattedTransactions];
        }

        handleSetState(stateChange);
      });
    }
  };

  const formatTransactions = (data: any[]) => {
    let formattedData = data;
    if (data.length === LIMIT + 1) {
      formattedData = data.slice(0, LIMIT);
    }

    return formattedData.map((transaction) => {
      return ({
        slot: transaction.slot,
        signature: transaction.signature,
        success: transaction.success,
        timestamp: R.pathOr('', ['block', 'timestamp'], transaction),
        numInstructions: R.pathOr(0, ['numInstructions'], transaction),
      });
    });
  };

  return {
    state,
    loadNextPage,
  };
};
