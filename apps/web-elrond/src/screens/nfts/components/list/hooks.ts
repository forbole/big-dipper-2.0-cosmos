import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import { NFTS, NFTS_COUNT } from '@/api';
import type { BlockState } from '@/screens/nfts/components/list/types';

export const PAGE_SIZE = 25;

export const useNFTs = () => {
  const [state, setState] = useState<BlockState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: Partial<BlockState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const getNFTsByPage = useCallback(
    async (page: number) => {
      try {
        const { data: nftData } = await axios.get(NFTS, {
          headers: {
            accept: 'application/json',
          },
          params: {
            from: page * PAGE_SIZE,
            size: PAGE_SIZE,
            type: 'SemiFungibleESDT,NonFungibleESDT',
          },
        });

        const items = nftData.map((x: any) => ({
          identifier: R.pathOr('', ['identifier'], x),
          name: R.pathOr('', ['name'], x),
          type: R.pathOr('', ['type'], x),
          creator: R.pathOr('', ['creator'], x),
          collection: R.pathOr('', ['collection'], x),
        }));

        handleSetState({
          loading: false,
          items,
        });
      } catch (error: any) {
        console.error(NFTS, error.message);
      }
    },
    [handleSetState]
  );

  const handlePageChangeCallback = useCallback(
    async (page: number, _rowsPerPage: number) => {
      handleSetState({
        page,
        loading: true,
      });
      await getNFTsByPage(page);
    },
    [getNFTsByPage, handleSetState]
  );

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data: total } = await axios.get(NFTS_COUNT, {
          headers: {
            accept: 'application/json',
          },
          params: {
            // keeps getting blocked by client
            // type: 'SemiFungibleESDT,NonFungibleESDT',
          },
        });
        const maxSize = 1000;
        handleSetState({
          total: total > maxSize ? maxSize : total,
        });
      } catch (error: any) {
        console.error(NFTS_COUNT, error.message);
      }
    };

    getCount();
    getNFTsByPage(0);
  }, [getNFTsByPage, handleSetState]);

  return {
    state,
    handlePageChangeCallback,
  };
};
