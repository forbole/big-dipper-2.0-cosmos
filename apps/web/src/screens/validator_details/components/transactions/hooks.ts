import { useState } from 'react';
import { useRouter } from 'next/router';
import { convertMsgsToModels } from 'ui/components/msg';
import * as R from 'ramda';
import { QueryHookOptions, QueryResult } from '@apollo/client';
import { convertMsgType } from 'ui/utils/convert_msg_type';
import { TransactionState } from './types';

const LIMIT = 50;

export type UseGetMessagesByAddressQuery<TData, TVariables> = (
  baseOptions?: QueryHookOptions<TData, TVariables>
) => QueryResult<TData, TVariables>;

export function useTransactions<TData, TVariables>(
  useGetMessagesByAddressQuery: UseGetMessagesByAddressQuery<TData, TVariables>
) {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  });

  const handleSetState = (stateChange: Partial<TransactionState>) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState) as TransactionState);
  };

  const transactionQuery = useGetMessagesByAddressQuery({
    variables: {
      limit: LIMIT + 1, // to check if more exist
      offset: 0,
      address: `{${R.pathOr('', ['query', 'address'], router)}}`,
    } as TVariables,
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
        return eachMsgType;
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
