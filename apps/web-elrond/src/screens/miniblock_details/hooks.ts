import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { MINIBLOCK_DETAILS } from '@api';
import type { BlockDetailsState } from './types';

export const useBlockDetails = () => {
  const router = useRouter();
    const [state, setState] = useState<BlockDetailsState>({
    loading: true,
    exists: true,
    overview: {
      hash: '',
      receiverBlockHash: '',
      senderBlockHash: '',
      receiverShard: 0,
      senderShard: 0,
      timestamp: 0,
      type: '',
    },
  });

  const handleSetState = useCallback((stateChange: Partial<BlockDetailsState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getBlockDetails = async () => {
      try {
        const { data: blockData } = await axios.get(MINIBLOCK_DETAILS(router.query.hash as string));

        handleSetState({
          loading: false,
          overview: {
            hash: blockData.miniBlockHash,
            receiverBlockHash: blockData.receiverBlockHash,
            senderBlockHash: blockData.senderBlockHash,
            receiverShard: blockData.receiverShard,
            senderShard: blockData.senderShard,
            timestamp: blockData.timestamp,
            type: blockData.type,
          },
        });
      } catch (error) {
        handleSetState({
          loading: false,
          exists: false,
        });
        console.error((error as any).message);
      }
    };

    getBlockDetails();
  }, [handleSetState, router.query.hash]);

  return {
    state,
  };
};
