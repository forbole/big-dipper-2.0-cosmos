import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useLastHundredBlocksQuery,
  LastHundredBlocksQuery,
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
    votingPower: number;
    totalVotingPower: number;
    signed: boolean;
  }[]>([]);

  const router = useRouter();
  const { findAddress } = useChainContext();

  useLastHundredBlocksQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onCompleted: (data) => {
      setState(formatLastHundredBlocks(data));
    },
  });

  const formatLastHundredBlocks = (data: LastHundredBlocksQuery) => {
    return data.block.map((x) => {
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: x.validator.validatorInfo.operatorAddress,
        votingPower: x.preCommitsAggregate.aggregate.sum.votingPower,
        totalVotingPower: x.validatorVotingPowers.aggregate.sum.votingPower,
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
        votingPower: `${numeral((x.votingPower / x.totalVotingPower) * 100).format('0.[00]')}%`,
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
