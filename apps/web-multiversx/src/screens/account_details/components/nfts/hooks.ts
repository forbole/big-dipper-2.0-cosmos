import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import axios from 'axios';
import { ACCOUNT_DETAILS_NFTS, ACCOUNT_DETAILS_NFTS_COUNT } from '@/api';
import type { OtherTokensState } from '@/screens/account_details/components/nfts/types';

export const PAGE_SIZE = 10;

type NFTResult = Array<{
  identifier?: string;
  name?: string;
  type?: string;
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
        const { data } = await axios.get<NFTResult>(
          ACCOUNT_DETAILS_NFTS(router.query.address as string),
          {
            params: {
              from: page * PAGE_SIZE,
              size: PAGE_SIZE,
              withLogs: false,
              type: 'SemiFungibleESDT,NonFungibleESDT',
            },
          }
        );

        const items = data.map((x) => ({
          identifier: x?.identifier ?? '',
          name: x?.name ?? '',
          type: x?.type ?? '',
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
    [handleSetState, router.query.address]
  );

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

  return {
    state,
    handlePageChangeCallback,
  };
};
