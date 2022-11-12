import { useState, useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { BLOCK_DETAILS } from '@api';
import { BlockDetailsState } from './types';

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<BlockDetailsState>({
    loading: true,
    exists: true,
    overview: {
      block: 0,
      hash: '',
      proposer: '',
      timestamp: 0,
      txs: 0,
      gasPenalized: 0,
      gasProvided: 0,
      gasRefunded: 0,
      gasUsed: 0,
      size: 0,
      shard: 0,
    },
    miniBlocks: [],
    consensus: [],
  });

  useEffect(() => {
    getBlockDetails();
  }, [router.query.hash]);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const getBlockDetails = async () => {
    try {
      const { data: blockData } = await axios.get(BLOCK_DETAILS(router.query.hash as string));
      const size = R.pathOr(0, ['size'], blockData);
      const sizeTxs = R.pathOr(0, ['sizeTxs'], blockData);
      handleSetState({
        loading: false,
        overview: {
          block: blockData.round,
          hash: blockData.hash,
          proposer: blockData.proposer,
          timestamp: blockData.timestamp,
          txs: blockData.txCount,
          size: size + sizeTxs,
          shard: blockData.shard,
          gasUsed: blockData.gasConsumed,
          gasProvided: blockData.maxGasLimit,
          gasRefunded: blockData.gasRefunded,
          gasPenalized: blockData.gasPenalized,
        },
        miniBlocks: R.pathOr([], ['miniBlocksHashes'], blockData),
        consensus: blockData.validators,
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
