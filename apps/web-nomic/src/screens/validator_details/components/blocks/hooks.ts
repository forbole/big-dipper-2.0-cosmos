import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useLastHundredBlocksSubscription,
  LastHundredBlocksSubscription,
} from '@graphql/types/general_types';

export const useBlocks = () => {
  const [state, setState] = useState<
    {
      height: number;
      txs: number;
      proposer: string;
      signed: boolean;
    }[]
  >([]);

  const router = useRouter();

  useLastHundredBlocksSubscription({
    variables: {
      address: router?.query?.address as string ?? '',
    },
    onData: (data) => {
      setState(data.data.data ? formatLastHundredBlocks(data.data.data) : []);
    },
  });

  const formatLastHundredBlocks = (data: LastHundredBlocksSubscription) => {
    return data.block.map((x) => {
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: x.precommits[0].validatorAddress,
        signed: x.precommits.length === 1,
      };
    });
  };

  return {
    state,
  };
};
