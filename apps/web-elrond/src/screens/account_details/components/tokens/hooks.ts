import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import { formatTokenByExponent } from '@/utils/format_token';
import { ACCOUNT_DETAILS_TOKENS, ACCOUNT_DETAILS_TOKENS_COUNT } from '@/api';
import type { OtherTokensState } from '@/screens/account_details/components/tokens/types';

export const PAGE_SIZE = 10;

type TokensResult = Array<{
  balance?: string;
  decimals?: number;
  identifier?: string;
  name?: string;
  assets?: {
    pngUrl?: string;
  };
}>;

export const useTokens = () => {
  const router = useRouter();
  const [state, setState] = useState<OtherTokensState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback(
    (stateChange: (prevState: OtherTokensState) => OtherTokensState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const getTransactionsByPage = useCallback(
    async (page: number) => {
      try {
        const { data } = await axios.get<TokensResult>(
          ACCOUNT_DETAILS_TOKENS(router.query.address as string),
          {
            params: {
              from: page * PAGE_SIZE,
              size: PAGE_SIZE,
              withLogs: false,
            },
          }
        );

        const items = data.map((x) => {
          const balance = x?.balance ?? '0';
          const exponent = x?.decimals ?? 0;
          return {
            identifier: x?.identifier ?? '',
            name: x?.name ?? '',
            balance: {
              displayDenom: x?.name ?? '',
              baseDenom: x?.name ?? '',
              exponent: x?.decimals ?? 0,
              value: formatTokenByExponent(balance, exponent),
            },
            imageUrl: x?.assets?.pngUrl ?? '',
          };
        });

        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          items,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    },
    [handleSetState, router.query.address]
  );

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data: total } = await axios.get(
          ACCOUNT_DETAILS_TOKENS_COUNT(router.query.address as string)
        );
        handleSetState((prevState) => ({
          ...prevState,
          total,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getCount();
    getTransactionsByPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.address]);

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
