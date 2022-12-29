import {
  LastHundredBlocksSubscription,
  useLastHundredBlocksSubscription,
} from '@/graphql/types/general_types';
import { useRouter } from 'next/router';
import { useState } from 'react';

const formatLastHundredBlocks = (data: LastHundredBlocksSubscription) =>
  data.block.map((x) => ({
    height: x.height,
    txs: x.transactions.length,
    proposer: x.precommits[0].validatorAddress,
    signed: x.precommits.length === 1,
  }));

type BlocksState = {
  height: number;
  txs: number;
  proposer: string;
  signed: boolean;
}[];

export const useBlocks = () => {
  const [state, setState] = useState<BlocksState>([]);

  const router = useRouter();

  useLastHundredBlocksSubscription({
    variables: {
      address: (router?.query?.address as string) ?? '',
    },
    onData: (data) => {
      setState(data.data.data ? formatLastHundredBlocks(data.data.data) : []);
    },
  });

  return {
    state,
  };
};
