import axios from 'axios';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';
import { TRANSACTION_DETAILS } from '@/api';
import chainConfig from '@/chainConfig';
import type { ActionType, TransactionDetailsState } from '@/screens/transaction_details/types';
import { formatToken, formatTokenByExponent } from '@/utils/format_token';

const { primaryTokenUnit, tokenUnits } = chainConfig();

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

  const handleSetState = useCallback(
    (stateChange: (prevState: TransactionDetailsState) => TransactionDetailsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    const getTransactionDetail = async () => {
      try {
        const { data: transactionData } = await axios.get<{
          txHash: TransactionDetailsState['overview']['hash'];
          senderShard: TransactionDetailsState['overview']['fromShard'];
          receiverShard: TransactionDetailsState['overview']['toShard'];
          sender: TransactionDetailsState['overview']['from'];
          receiver: TransactionDetailsState['overview']['to'];
          timestamp: TransactionDetailsState['overview']['timestamp'];
          status: TransactionDetailsState['overview']['status'];
          miniBlockHash: TransactionDetailsState['overview']['miniblockHash'];
          gasUsed: TransactionDetailsState['overview']['gasUsed'];
          gasLimit: TransactionDetailsState['overview']['gasLimit'];
          gasPrice: string | undefined;
          price: TransactionDetailsState['overview']['price'];
          action?: {
            category: string;
            name: string;
            description: string;
          };
          operations?: Array<{
            type?: string;
            decimals?: number;
            value?: string;
            action?: string;
            sender?: string;
            receiver?: string;
            identifier?: string;
            name?: string;
          }>;
          results: Array<{
            hash?: string;
            sender?: string;
            receiver?: string;
            data?: string;
            value?: number;
          }>;
          data?: string;
        }>(TRANSACTION_DETAILS(router.query.hash as string));

        // overview
        const overview: TransactionDetailsState['overview'] = {
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
          gasPrice: formatToken(transactionData?.gasPrice ?? 0, primaryTokenUnit),
          price: transactionData.price,
        };

        // action
        let action: ActionType | null = null;
        if (transactionData.action) {
          action = {
            category: transactionData.action?.category ?? '',
            name: transactionData.action?.name ?? '',
            description: transactionData.action?.description ?? '',
          };
        }

        // operations
        const operations = transactionData?.operations?.map((x) => {
          // edge case if value is base token
          const type = x?.type ?? '';
          let decimals = x?.decimals ?? 0;
          if (type === primaryTokenUnit) {
            decimals = tokenUnits?.[primaryTokenUnit].exponent;
          }
          const value = formatTokenByExponent(x?.value ?? 0, decimals);
          return {
            action: x?.action ?? '',
            sender: x?.sender ?? '',
            receiver: x?.receiver ?? '',
            identifier: x?.identifier ?? '',
            value: {
              value,
              baseDenom: x?.name || type,
              displayDenom: x?.name || type,
              exponent: decimals,
            },
          };
        });

        // results
        const results = transactionData?.results?.map((x) => ({
          hash: x?.hash ?? '',
          sender: x?.sender ?? '',
          receiver: x?.receiver ?? '',
          data: x?.data ?? '',
          value: formatToken(x?.value ?? 0, primaryTokenUnit),
        }));

        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          overview,
          data: transactionData?.data ?? '',
          action: action ?? prevState.action,
          operations: operations ?? prevState.operations,
          results,
        }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          exists: false,
        }));
        console.error((error as Error).message);
      }
    };

    getTransactionDetail();
  }, [handleSetState, router.query.hash]);

  return {
    state,
  };
};
