import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useBlockDetailsQuery,
  BlockDetailsQuery,
} from '@graphql/types';
import { useChainContext } from '@contexts';

export const useBlockDetails = () => {
  const { findAddress } = useChainContext();
  const router = useRouter();
  const [state, setState] = useState<{
    loading: boolean;
    exists: boolean;
    overview: {
      height: number;
      hash: string;
      txs: number;
      timestamp: string;
      proposer: AvatarName;
      votingPower: number;
    }
  }>({
    loading: true,
    exists: true,
    overview: {
      height: 0,
      hash: '',
      txs: 0,
      timestamp: '',
      proposer: {
        address: '',
        name: '',
        imageUrl: null,
      },
      votingPower: 0,
    },
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Data
  // ==========================
  useBlockDetailsQuery({
    variables: {
      height: numeral(router.query.height).value(),
    },
    onCompleted: (data) => {
      handleSetState(formatRaws(data));
    },
  });

  const formatRaws = (data: BlockDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.block.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // ==========================
    // Overview
    // ==========================
    const proposerAddress = R.pathOr('', ['block', 0, 'validator', 'validatorInfo', 'operatorAddress'], data);
    const proposer = findAddress(proposerAddress);

    const overview = {
      height: data.block[0].height,
      hash: data.block[0].hash,
      txs: data.block[0].txs,
      timestamp: data.block[0].timestamp,
      proposer: {
        address: proposerAddress,
        imageUrl: proposer.imageUrl,
        name: proposer.moniker,
      },
      // votingPower: R.pathOr(0, [
      //   'block',
      //   0,
      //   'preCommitsAggregate',
      //   'aggregate',
      //   'sum',
      //   'votingPower',
      // ], data),
    };

    stateChange.overview = overview;
    return stateChange;
  };

  return {
    state,
  };
};
