import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { TOKENS, TOKENS_COUNT } from '@/api';
import type { TokenState } from '@/screens/tokens/components/list/types';

export const PAGE_SIZE = 25;

type TokensResult = Array<{
  identifier?: string;
  name?: string;
  owner?: string;
  accounts?: number;
  transactions?: number;
  assets?: {
    pngUrl?: string;
  };
}>;

export const useBlocks = () => {
  const [state, setState] = useState<TokenState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: (prevState: TokenState) => TokenState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data: tokensData } = await axios.get<TokensResult>(TOKENS, {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
          },
        });

        const items = tokensData.map((x) => ({
          identifier: x?.identifier ?? '',
          name: x?.name ?? '',
          owner: x?.owner ?? '',
          accounts: x?.accounts ?? 0,
          transactions: x?.transactions ?? 0,
          imageUrl: x?.assets?.pngUrl ?? '',
        }));

        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          items,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [handleSetState]
  );

  useEffect(() => {
    const getLatestTransactionCount = async () => {
      try {
        const { data: total } = await axios.get(TOKENS_COUNT);
        handleSetState((prevState) => ({
          ...prevState,
          total,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getLatestTransactionCount();
    getTransactionsByPage(0);
  }, [getTransactionsByPage, handleSetState]);

  const handlePageChangeCallback = useCallback(
    async (page: number, _rowsPerPage: number) => {
      handleSetState((prevState) => ({
        ...prevState,
        page,
        loading: true,
      }));
      await getTransactionsByPage(page);
    },
    [getTransactionsByPage, handleSetState]
  );

  return {
    state,
    handlePageChangeCallback,
  };
};
