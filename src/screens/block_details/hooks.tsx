import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useBlockDetailsQuery,
  BlockDetailsQuery,
} from '@graphql/types';
import { useChainContext } from '@contexts';
import { BlockDetailState } from './types';

export const useBlockDetails = () => {
  const { findAddress } = useChainContext();
  const router = useRouter();
  const [state, setState] = useState<BlockDetailState>({
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
    signatures: [],
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
    const formatOverview = () => {
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
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    // ==========================
    // Signatures
    // ==========================
    const formatSignatures = () => {
      const signatures = data.block[0].preCommits.map((x) => {
        return findAddress(x.validator.validatorInfo.operatorAddress);
      });
      return signatures;
    };
    stateChange.signatures = formatSignatures();

    return stateChange;
  };

  return {
    state,
  };
};
