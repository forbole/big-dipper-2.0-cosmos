import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useLastHundredBlocksSubscription,
  LastHundredBlocksSubscription,
} from '@graphql/types/general_types';

export const useBlocks = () => {
  const [state, setState] = useState<{
    height: number;
    txs: number;
    proposer: string;
    signed: boolean;
  }[]>([]);

  const router = useRouter();

  useLastHundredBlocksSubscription({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onData: (data) => {
      if (!data.data.data) return;
      setState(formatLastHundredBlocks(data.data.data));
    },
  });

  const formatLastHundredBlocks = (data: LastHundredBlocksSubscription) => {
    return data.block.map((x) => {
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: x.validator?.validatorInfo?.operatorAddress ?? '',
        signed: x.precommits.length === 1,
      };
    });
  };

  return {
    state,
  };
};
