import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useLastHundredBlocksSubscription,
  LastHundredBlocksSubscription,
} from '@graphql/types';
import {
  AvatarName,
  Result,
} from '@components';
import { useChainContext } from '@contexts';

export const useBlocks = () => {
  const [state, setState] = useState<{
    height: number;
    txs: number;
    proposer: string;
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
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: x.validator.validatorInfo.operatorAddress,
        signed: x.precommits.length === 1,
      };
    });
  };

  const formatUi = () => {
    return state.map((x) => {
      const proposer = findAddress(x.proposer);
      return ({
        proposer: (
          <AvatarName
            address={x.proposer}
            imageUrl={proposer ? proposer?.imageUrl : null}
            name={proposer ? proposer.moniker : x.proposer}
          />
        ),
        block: numeral(x.height).format('0,0'),
        txs: numeral(x.txs).format('0,0'),
        signed: (
          <Result success={x.signed} />
        ),
      });
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
