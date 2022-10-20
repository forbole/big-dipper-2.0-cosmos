/* eslint-disable max-len */
import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useBlockDetailsQuery,
  BlockDetailsQuery,
} from '@graphql/types';
import { BlockDetailState } from './types';

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<BlockDetailState>({
    loading: true,
    exists: true,
    overview: {
      slot: 0,
      hash: '',
      txs: 0,
      timestamp: '',
      leader: '',
    },
    transactions: [],
  });
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    // reset every call
    handleSetState({
      loading: true,
      exists: true,
    });
  }, [router.query.height]);

  // ==========================
  // Fetch Data
  // ==========================
  useBlockDetailsQuery({
    variables: {
      height: numeral(router.query.slot).value(),
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
      const leaderAddress = R.pathOr('', ['block', 0, 'validator', 0, 'address'], data);
      const overview = {
        slot: data.block[0].slot,
        hash: data.block[0].hash,
        txs: data.block[0].numTxs,
        timestamp: data.block[0].timestamp,
        leader: leaderAddress,
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    // ==========================
    // Transactions
    // ==========================
    const formatTransactions = () => {
      const transactions = data.transaction.map((x) => {
        return ({
          slot: x.slot,
          signature: x.signature,
          success: x.success,
          timestamp: stateChange.overview.timestamp,
          numInstructions: R.pathOr(0, ['numInstructions'], x),
        });
      });

      return transactions;
    };
    stateChange.transactions = formatTransactions();

    return stateChange;
  };

  return {
    state,
  };
};
