import { convertMsgsToModels } from '@/components/msg/utils';
import { BlockDetailsQuery, useBlockDetailsQuery } from '@/graphql/types/general_types';
import type { BlockDetailState } from '@/screens/block_details/types';
import { convertMsgType } from '@/utils/convert_msg_type';
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

  useEffect(() => {
    // reset every call
    handleSetState((prevState) => ({
      ...prevState,
      loading: true,
      exists: true,
    }));
  }, [handleSetState]);

  return {
    state,
  };
};

function formatRaws(data: BlockDetailsQuery) {
  const stateChange: Partial<BlockDetailState> = {
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
    const proposerAddress = data?.block?.[0]?.validator?.validatorInfo?.operatorAddress ?? '';
    const overview = {
      height: data.block[0].height,
      hash: data.block[0].hash,
      txs: data.block[0].txs ?? 0,
      timestamp: data.block[0].timestamp,
      proposer: proposerAddress,
    };
    return overview;
  };

  stateChange.overview = formatOverview();

  // ==========================
  // Signatures
  // ==========================
  const formatSignatures = () => {
    const signatures = data.preCommits
      .filter((x) => x?.validator?.validatorInfo)
      .map((x) => x?.validator?.validatorInfo?.operatorAddress ?? '');
    return signatures;
  };
  stateChange.signatures = formatSignatures();

  // ==========================
  // Transactions
  // ==========================
  const formatTransactions = () => {
    const transactions = data.transaction.map((x) => {
      const messages = convertMsgsToModels(x);
      const msgType = messages.map((eachMsg) => {
        const eachMsgType = eachMsg?.type ?? 'none type';
        return eachMsgType ?? '';
      });
      const convertedMsgType = convertMsgType(msgType);
      return {
        type: convertedMsgType,
        height: x.height,
        hash: x.hash,
        success: x.success,
        timestamp: stateChange.overview?.timestamp ?? '',
        messages: {
          count: x.messages.length,
          items: messages,
        },
      };
    });

    return transactions;
  };
  stateChange.transactions = formatTransactions();

  return stateChange;
}
