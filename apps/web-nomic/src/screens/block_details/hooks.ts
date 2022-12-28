import { BlockDetailsQuery, useBlockDetailsQuery } from '@/graphql/types/general_types';
import type { BlockDetailState, OverviewType } from '@/screens/block_details/types';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<BlockDetailState>({
    loading: true,
    exists: true,
    overview: {
      height: 0,
      hash: '',
      txs: 0,
      timestamp: '',
      proposer: '',
    },
    signatures: [],
    transactions: [],
  });
  const handleSetState = useCallback(
    (stateChange: (prevState: BlockDetailState) => BlockDetailState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    // reset every call
    handleSetState((prevState) => ({
      ...prevState,
      loading: true,
      exists: true,
    }));
  }, [handleSetState]);

  // ==========================
  // Fetch Data
  // ==========================
  useBlockDetailsQuery({
    variables: {
      height: numeral(router.query.height).value(),
      signatureHeight: (numeral(router.query.height).value() ?? 0) + 1,
    },
    onCompleted: (data) => {
      handleSetState((prevState) => ({ ...prevState, ...formatRaws(data) }));
    },
  });

  return {
    state,
  };
};

// ==========================
// Overview
// ==========================
const formatOverview = (data: BlockDetailsQuery) => {
  const proposerAddress = data?.block?.[0]?.operatorAddress ?? '';
  const overview: OverviewType = {
    height: data.block[0].height,
    hash: data.block[0].hash,
    txs: data.block[0].txs ?? 0,
    timestamp: data.block[0].timestamp,
    proposer: proposerAddress,
  };
  return overview;
};

// ==========================
// Signatures
// ==========================
const formatSignatures = (data: BlockDetailsQuery) => {
  const signatures = data.preCommits
    .filter((x) => x?.operatorAddress)
    .map((x) => x.operatorAddress);
  return signatures;
};

// ==========================
// Transactions
// ==========================
const formatTransactions = (data: BlockDetailsQuery, stateChange: Partial<BlockDetailState>) => {
  const transactions = data.transaction.map((x) => ({
    height: x.height,
    hash: x.hash,
    timestamp: stateChange.overview?.timestamp ?? '',
  }));

  return transactions;
};

function formatRaws(data: BlockDetailsQuery) {
  const stateChange: Partial<BlockDetailState> = {
    loading: false,
  };

  if (!data.block.length) {
    stateChange.exists = false;
    return stateChange;
  }

  stateChange.overview = formatOverview(data);
  stateChange.signatures = formatSignatures(data);
  stateChange.transactions = formatTransactions(data, stateChange);

  return stateChange;
}
