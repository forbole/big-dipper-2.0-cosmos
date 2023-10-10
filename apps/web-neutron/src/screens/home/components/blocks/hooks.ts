import * as R from 'ramda';
import { useCallback, useState } from 'react';
import {
  BlocksListenerSubscription,
  useBlocksListenerSubscription,
} from '@/graphql/types/general_types';
import type { BlocksState, ItemType } from '@/screens/home/components/blocks/types';

const formatBlocks = (data: BlocksListenerSubscription): ItemType[] =>
  data.blocks.map((x) => {
    const proposerAddress =
      x?.validator?.validatorInfo?.[0].ccv_validator_signing_info?.providerOperatorAddress ?? '';
    const consumerOperatorAddress = x?.ccv_validator?.consumer_operator_address ?? '';
    return {
      height: x.height,
      txs: x.txs ?? 0,
      hash: x.hash,
      timestamp: x.timestamp,
      proposer: proposerAddress,
      consumerOperatorAddress,
    };
  }) ?? [];

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>({
    loading: true,
    items: [],
  });

  const handleSetState = useCallback((stateChange: (prevState: BlocksState) => BlocksState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    onData: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items: data.data.data ? formatBlocks(data.data.data) : [],
      }));
    },
  });

  return {
    state,
  };
};
