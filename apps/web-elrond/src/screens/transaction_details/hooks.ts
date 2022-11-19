import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import chainConfig from 'ui/chainConfig';
import { formatToken, formatTokenByExponent } from 'ui/utils/format_token';
import { TRANSACTION_DETAILS } from '@api';
import type { TransactionDetailsState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useTransactionDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionDetailsState>({
    loading: true,
    exists: true,
    overview: {
      hash: '',
      fromShard: 0,
      toShard: 0,
      from: '',
      to: '',
      timestamp: 0,
      status: '',
      miniblockHash: '',
      gasLimit: 0,
      gasPrice: defaultTokenUnit,
      gasUsed: 0,
      price: 0,
    },
    data: '',
    operations: [],
    results: [],
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  useEffect(() => {
    const getTransactionDetail = async () => {
      try {
        const { data: transactionData } = await axios.get(
          TRANSACTION_DETAILS(router.query.hash as string)
        );

        // overview
        const overview = {
          hash: transactionData.txHash,
          fromShard: transactionData.senderShard,
          toShard: transactionData.receiverShard,
          from: transactionData.sender,
          to: transactionData.receiver,
          timestamp: transactionData.timestamp,
          status: transactionData.status,
          miniblockHash: transactionData.miniBlockHash,
          gasUsed: transactionData.gasUsed,
          gasLimit: transactionData.gasLimit,
          gasPrice: formatToken(
            R.pathOr(0, ['gasPrice'], transactionData),
            chainConfig.primaryTokenUnit
          ),
          price: transactionData.price,
        };

        // action
        let action = null;
        if (transactionData.action) {
          action = {
            category: R.pathOr('', ['category'], transactionData.action),
            name: R.pathOr('', ['name'], transactionData.action),
            description: R.pathOr('', ['description'], transactionData.action),
          };
        }

        // operations
        const operations = R.pathOr([], ['operations'], transactionData).map((x) => {
          // edge case if value is base token
          const type = R.pathOr('', ['type'], x);
          let decimals = R.pathOr(0, ['decimals'], x);
          if (type === chainConfig.primaryTokenUnit) {
            decimals = chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent;
          }
          const value = formatTokenByExponent(R.pathOr('0', ['value'], x), decimals);
          return {
            action: R.pathOr('', ['action'], x),
            sender: R.pathOr('', ['sender'], x),
            receiver: R.pathOr('', ['receiver'], x),
            identifier: R.pathOr('', ['identifier'], x),
            value: {
              value,
              baseDenom: R.pathOr('', ['name'], x) || type,
              displayDenom: R.pathOr('', ['name'], x) || type,
              exponent: decimals,
            },
          };
        });

        // results
        const results = R.pathOr([], ['results'], transactionData).map((x) => {
          return {
            hash: R.pathOr('', ['hash'], x),
            sender: R.pathOr('', ['sender'], x),
            receiver: R.pathOr('', ['receiver'], x),
            data: R.pathOr('', ['data'], x),
            value: formatToken(R.pathOr(0, ['value'], x), chainConfig.primaryTokenUnit),
          };
        });

        handleSetState({
          loading: false,
          overview,
          data: R.pathOr('', ['data'], transactionData),
          action,
          operations,
          results,
        });
      } catch (error) {
        handleSetState({
          loading: false,
          exists: false,
        });
        console.log((error as any).message);
      }
    };

    getTransactionDetail();
  }, [handleSetState, router.query.hash]);

  return {
    state,
  };
};
