import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import { formatTokenByExponent } from 'ui/utils/format_token';
import { ACCOUNT_DETAILS_TOKENS, ACCOUNT_DETAILS_TOKENS_COUNT } from '@api';
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

  const getTransactionsByPage = useCallback(async (page: number) => {
    try {
      const { data } = await axios.get(ACCOUNT_DETAILS_TOKENS(router.query.address as string), {
        params: {
          from: page * PAGE_SIZE,
          size: PAGE_SIZE,
          withLogs: false,
        },
      });

      const items = data.map((x: any) => {
        const balance = R.pathOr('0', ['balance'], x);
        const exponent = R.pathOr(0, ['decimals'], x);
        return {
          identifier: R.pathOr('', ['identifier'], x),
          name: R.pathOr('', ['name'], x),
          balance: {
            displayDenom: R.pathOr('', ['name'], x),
            baseDenom: R.pathOr('', ['name'], x),
            exponent: R.pathOr(0, ['decimals'], x),
            value: formatTokenByExponent(balance, exponent),
          },
          imageUrl: R.pathOr('', ['assets', 'pngUrl'], x),
        };
      });

      handleSetState({
        loading: false,
        items,
      });
    } catch (error) {
      console.log((error as any).message);
    }
  }, [handleSetState, router.query.address]);

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data: total } = await axios.get(
          ACCOUNT_DETAILS_TOKENS_COUNT(router.query.address as string)
        );
        handleSetState({
          total,
        });
      } catch (error) {
        console.log((error as any).message);
      }
    };

    getCount();
    getTransactionsByPage(0);
  }, [getTransactionsByPage, handleSetState, router.query.address]);

  const handlePageChangeCallback = useCallback(async (page: number, _rowsPerPage: number) => {
    handleSetState({
      page,
      loading: true,
    });
    await getTransactionsByPage(page);
  }, [getTransactionsByPage, handleSetState]);

  return {
    state,
    handlePageChangeCallback,
  };
};
