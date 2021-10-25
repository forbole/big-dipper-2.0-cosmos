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
import { useProfileRecoil } from '@recoil/profiles';
import { convertMsgsToModels } from '@msg';
// import { useChainContext } from '@contexts';
import { BlockDetailState } from './types';

export const useBlockDetails = () => {
  // const { findAddress } = useChainContext();
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
      const signatures = data.preCommits.filter((x) => x?.validator?.validatorInfo).map((x) => {
        const operator = findAddress(x.validator.validatorInfo.operatorAddress);
        return {
          address: x.validator.validatorInfo.operatorAddress,
          name: operator.moniker,
          imageUrl: operator.imageUrl,
        };
      });
      return signatures;
    };
    stateChange.signatures = formatSignatures();

    // ==========================
    // Transactions
    // ==========================
    const formatTransactions = () => {
      const transactions = data.transaction.map((x) => {
        const messages = convertMsgsToModels(x);
        return ({
          height: x.height,
          hash: x.hash,
          success: x.success,
          timestamp: stateChange.overview.timestamp,
          messages: {
            count: x.messages.length,
            items: messages,
          },
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
