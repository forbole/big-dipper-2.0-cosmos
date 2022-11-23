import { useState } from 'react';
import { useRouter } from 'next/router';
import { convertMsgsToModels } from '@/components/msg/utils';
import * as R from 'ramda';
import { QueryHookOptions, QueryResult } from '@apollo/client';
import { convertMsgType } from '@/utils/convert_msg_type';
import type { TransactionState } from '@/screens/validator_details/components/transactions/types';

const LIMIT = 50;

type TVariables = {
  address?: string;
  limit?: number;
  offset?: number;
  types?: string;
};

export type UseGetMessagesByAddressQuery<TData> = (
  baseOptions?: QueryHookOptions<TData, TVariables>
) => QueryResult<TData, TVariables>;

export function useTransactions<TData>(
  useGetMessagesByAddressQuery: UseGetMessagesByAddressQuery<TData>
) {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  });

  const handleSetState = (stateChange: Partial<TransactionState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  };

  const transactionQuery = useGetMessagesByAddressQuery({
    variables: {
      limit: LIMIT + 1, // to check if more exist
      offset: 0,
      address: `{${router?.query?.address ?? ''}}`,
    },
    onCompleted: (data: any) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange: TransactionState = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT,
      };

      handleSetState(stateChange);
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await transactionQuery
      .fetchMore({
        variables: {
          offset: state.offsetCount,
          limit: LIMIT + 1,
        },
      })
      .then(({ data }: any) => {
        const itemsLength = data.messagesByAddress.length;
        const newItems = R.uniq([...state.data, ...formatTransactions(data)]);
        const stateChange: TransactionState = {
          data: newItems,
          hasNextPage: itemsLength === 51,
          isNextPageLoading: false,
          offsetCount: state.offsetCount + LIMIT,
        };
        handleSetState(stateChange);
      });
  };

  const formatTransactions = (data: any) => {
    let formattedData = data.messagesByAddress;
    if (data.messagesByAddress.length === 51) {
      formattedData = data.messagesByAddress.slice(0, 51);
    }
    return formattedData.map((x: any) => {
      const { transaction } = x;

      // =============================
      // messages
      // =============================
      const messages = convertMsgsToModels(transaction);
      const msgType = messages.map((eachMsg: any) => {
        const eachMsgType = R.pathOr('none type', ['type'], eachMsg);
        return eachMsgType ?? '';
      });
      const convertedMsgType = convertMsgType(msgType);
      return {
        height: transaction?.height,
        hash: transaction?.hash,
        type: convertedMsgType,
        messages: {
          count: messages.length,
          items: messages,
        },
        success: transaction?.success,
        timestamp: transaction?.block.timestamp,
      };
    });
  };

  return {
    state,
    loadNextPage,
  };
}
