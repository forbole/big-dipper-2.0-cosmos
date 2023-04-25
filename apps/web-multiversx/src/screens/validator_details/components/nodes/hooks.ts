import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import axios from 'axios';
import { waitForAllSettled } from 'recoil';
import { isBech32 } from '@/utils/bech32';
import { POLLING_INTERVAL, NODES_COUNT, NODES } from '@/api';
import { useInterval } from '@/hooks/use_interval';
import type { NodeState } from '@/screens/validator_details/components/nodes/types';

export const PAGE_SIZE = 10;

type BlocksResult = Array<{
  bls?: string;
  name?: string;
  shard?: number;
  version?: string;
  status?: string;
  online: boolean;
}>;

export const useBlocks = () => {
  const router = useRouter();
  const [state, setState] = useState<NodeState>({
    page: 0,
    loading: true,
    items: [],
    total: 0,
  });

  const handleSetState = useCallback((stateChange: (prevState: NodeState) => NodeState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getNodesTotal = async () => {
      try {
        const params: {
          provider?: string | string[] | undefined;
          identity?: string | string[] | undefined;
        } = {
          // come back to this later
          // brave will block the api if type validator is present
          // type: 'validator',
        };
        if (isBech32(router.query.identity as string)) {
          params.provider = router.query.identity;
        } else {
          params.identity = router.query.identity;
        }

        const { data: total } = await axios.get(NODES_COUNT, {
          params,
        });
        handleSetState((prevState) => ({
          ...prevState,
          total,
        }));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getNodesTotal();
  }, [handleSetState, router.query.identity]);

  const getBlocksByPage = useCallback(
    async (page: number) => {
      try {
        const params: {
          from: number;
          size: number;
          type: string;
          provider?: string | string[] | undefined;
          identity?: string | string[] | undefined;
        } = {
          from: page * PAGE_SIZE,
          size: PAGE_SIZE,
          type: 'validator',
        };
        if (isBech32(router.query.identity as string)) {
          params.provider = router.query.identity;
        } else {
          params.identity = router.query.identity;
        }

        const { data: blocksData } = await axios.get<BlocksResult>(NODES, {
          params,
        });

        const items = blocksData.map((x): NodeState['items'][number] => ({
          pubkey: x?.bls ?? '',
          name: x?.name ?? '',
          shard: x?.shard ?? 0,
          version: x?.version ?? '',
          status: x?.status ?? '',
          online: x?.online ?? waitForAllSettled,
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
    [handleSetState, router.query.identity]
  );

  const handlePageChangeCallback = useCallback(
    async (page: number, _rowsPerPage: number) => {
      handleSetState((prevState) => ({
        ...prevState,
        page,
        loading: true,
      }));
      await getBlocksByPage(page);
    },
    [getBlocksByPage, handleSetState]
  );

  const getBlocksInterval = useCallback(async () => {
    if (state.page === 0) {
      await getBlocksByPage(0);
    }
  }, [getBlocksByPage, state.page]);

  useInterval(getBlocksInterval, POLLING_INTERVAL);

  return {
    state,
    handlePageChangeCallback,
  };
};
