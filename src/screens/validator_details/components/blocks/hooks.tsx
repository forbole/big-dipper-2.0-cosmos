/* eslint-disable max-len */
import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { useRecoilCallback } from 'recoil';
import {
  useLastHundredBlocksSubscription,
  LastHundredBlocksSubscription,
} from '@graphql/types';
import { readProfile } from '@recoil/profiles';

export const useBlocks = () => {
  const [state, setState] = useState<{
    height: number;
    txs: number;
    proposer: AvatarName;
    signed: boolean;
  }[]>([]);

  const router = useRouter();
  useLastHundredBlocksSubscription({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onSubscriptionData: async (data) => {
      const formattedData = await formatLastHundredBlocks(data.subscriptionData.data);
      setState(formattedData);
    },
  });

  const formatLastHundredBlocks = useRecoilCallback(({ snapshot }) => async (data: LastHundredBlocksSubscription) => {
    const fetchedProfiles = await Promise.all(data.block.map(async (x) => {
      const proposer = x.validator.validatorInfo.operatorAddress;
      const numItemsInCart: AvatarName = await snapshot.getPromise(readProfile(proposer));
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: {
          address: numItemsInCart.address,
          name: numItemsInCart.name,
          imageUrl: numItemsInCart.imageUrl,
        },
        signed: x.precommits.length === 1,
      };
    }));

    return fetchedProfiles;
  });

  return {
    state,
  };
};
