import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useLastHundredBlocksSubscription,
  LastHundredBlocksSubscription,
} from '@graphql/types';
import { useChainContext } from '@contexts';

export const useBlocks = () => {
  const [state, setState] = useState<{
    height: number;
    txs: number;
    proposer: AvatarName;
    signed: boolean;
  }[]>([]);

  const router = useRouter();
  const { findAddress } = useChainContext();

  useLastHundredBlocksSubscription({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onSubscriptionData: (data) => {
      setState(formatLastHundredBlocks(data.subscriptionData.data));
    },
  });

  const formatLastHundredBlocks = (data: LastHundredBlocksSubscription) => {
    return data.block.map((x) => {
      const proposer = findAddress(x.validator.validatorInfo.operatorAddress);
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: {
          address: x.validator.validatorInfo.operatorAddress,
          name: proposer.moniker,
          imageUrl: proposer.imageUrl,
        },
        signed: x.precommits.length === 1,
      };
    });
  };

  return {
    state,
  };
};
