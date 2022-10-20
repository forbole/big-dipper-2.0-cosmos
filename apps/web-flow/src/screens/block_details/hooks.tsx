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
// import { convertMsgsToModels } from '@msg';
import { BlockDetailState } from './types';

export const useBlockDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<BlockDetailState>({
    loading: true,
    exists: true,
    overview: {
      height: 0,
      hash: '',
      parentId: '',
      txs: 0,
      timestamp: '',
    },
    signatures: [],
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
      height: numeral(router.query.height).value(),
      signatureHeight: numeral(router.query.height).value() + 1,
    },
    onCompleted: (data) => {
      handleSetState(formatRawData(data));
    },
  });

  const formatRawData = (data: BlockDetailsQuery) => {
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
      const overview = {
        height: data.block[0].height,
        hash: data.block[0].hash,
        parentId: data.block[0].parentId,
        txs: data.block[0].txs,
        timestamp: data.block[0].timestamp,
      };
      return overview;
    };
    stateChange.overview = formatOverview();

    // ==========================
    // Signatures
    // ==========================
    // const formatSignatures = () => {
    //   const { signatures } = data.block[0];
    //   return signatures;
    // };
    // stateChange.signatures = formatSignatures();

    // ==========================
    // Transactions
    // ==========================
    // const formatTransactions = () => {
    //   const transactions = data.transaction.map((x) => {
    //     const messages = convertMsgsToModels(x);
    //     return ({
    //       height: x.height,
    //       hash: x.hash,
    //       success: x.success,
    //       timestamp: stateChange.overview.timestamp,
    //       messages: {
    //         count: x.messages.length,
    //         items: messages,
    //       },
    //     });
    //   });

    //   return transactions;
    // };
    // stateChange.transactions = formatTransactions;

    return stateChange;
  };

  return state;
};
