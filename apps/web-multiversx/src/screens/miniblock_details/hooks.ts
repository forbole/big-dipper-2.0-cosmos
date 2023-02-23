import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { MINIBLOCK_DETAILS } from '@/api';
import type { BlockDetailsState } from '@/screens/miniblock_details/types';

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

  const handleSetState = useCallback(
    (stateChange: (prevState: BlockDetailsState) => BlockDetailsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    const getBlockDetails = async () => {
      try {
        const { data: blockData } = await axios.get(MINIBLOCK_DETAILS(router.query.hash as string));

        handleSetState((prevState) => ({
          ...prevState,
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
        }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          exists: false,
        }));
        console.error((error as Error).message);
      }
    };

    getBlockDetails();
  }, [handleSetState, router.query.hash]);

  return {
    state,
  };
};
