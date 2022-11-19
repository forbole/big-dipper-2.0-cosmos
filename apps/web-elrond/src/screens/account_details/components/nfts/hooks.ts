import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import { ACCOUNT_DETAILS_NFTS, ACCOUNT_DETAILS_NFTS_COUNT } from '@api';
import type { OtherTokensState } from './types';

export const PAGE_SIZE = 10;

export const useTokens = () => {
  const router = useRouter();
  const [state, setState] = useState<OtherTokensState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data } = await axios.get(ACCOUNT_DETAILS_NFTS(router.query.address as string), {
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
            withLogs: false,
            type: 'SemiFungibleESDT,NonFungibleESDT',
          },
        });

        const items = data.map((x: any) => {
          return {
            identifier: R.pathOr('', ['identifier'], x),
            name: R.pathOr('', ['name'], x),
            type: R.pathOr('', ['type'], x),
          };
        });

        handleSetState({
          loading: false,
          items,
        });
      } catch (error) {
        console.log((error as any).message);
      }
    },
    [handleSetState, router]
  );

  const handlePageChangeCallback = useCallback(
    async (page: number, _rowsPerPage: number) => {
      handleSetState({
        page,
        loading: true,
      });
      await getTransactionsByPage(page);
    },
    [getTransactionsByPage, handleSetState]
  );

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data: total } = await axios.get(
          ACCOUNT_DETAILS_NFTS_COUNT(router.query.address as string),
          {
            params: {
              type: 'SemiFungibleESDT,NonFungibleESDT',
            },
          }
        );
        handleSetState({
          total,
        });
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    getCount();
    getTransactionsByPage(0);
  }, [getTransactionsByPage, handleSetState, router]);

  return {
    state,
    handlePageChangeCallback,
  };
};
