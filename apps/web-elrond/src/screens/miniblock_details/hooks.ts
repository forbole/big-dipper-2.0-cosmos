import { useState, useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { MINIBLOCK_DETAILS } from '@api';
import { BlockDetailsState } from './types';

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

  useEffect(() => {
    getBlockDetails();
  }, [router.query.hash]);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

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
      console.log((error as any).message);
    }
  };

  return {
    state,
  };
};
