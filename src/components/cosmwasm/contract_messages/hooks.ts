import { useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import {
  CosmWasmExecutesDocument,
} from '@graphql/cosmwasm';
import { ContractMessagesState } from './types';

const LIMIT = 50;

export const useMessages = (addr: string) => {
  const fetchMessages = async (address: string, offset: number, limit: number) => {
    return axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
        offset,
        limit,
      },
      query: CosmWasmExecutesDocument,
    });
  };

  const fetchMessagesCompletionHandler = (data: any) => {
    const extractedData = R.pathOr([], ['data', 'cosmwasm_execute'], data);
    const itemsLength = extractedData.length;
    if (itemsLength === 0) {
      return;
    }
    const newItems = R.uniq([...state.data, ...formatMessages(extractedData)]);
    const stateChange = {
      data: newItems,
      hasNextPage: itemsLength === LIMIT,
      isNextPageLoading: false,
      offsetCount: state.offsetCount + itemsLength,
    };

    handleSetState(stateChange);
  };

  const [state, setState] = useState<ContractMessagesState>({
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  fetchMessages(addr, state.offsetCount, LIMIT).then(({ data }) => {
    fetchMessagesCompletionHandler(data);
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    fetchMessages(addr, state.offsetCount, LIMIT).then(({ data }) => {
      fetchMessagesCompletionHandler(data);
    });
  };

  const formatMessages = (data: any) => {
    return data.map((x) => {
      return ({
        height: x.transaction.block.height,
        transaction_hash: x.transaction_hash,
        method: x.method,
        success: x.success,
        timestamp: x.transaction.block.timestamp,
      });
    });
  };

  return ({
    state,
    loadNextPage,
  });
};
