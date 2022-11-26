import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useTransactionDetailsQuery, TransactionDetailsQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';
import type { TransactionState } from '@/screens/transaction_details/types';

export const useTransactionDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    exists: true,
    loading: true,
    overview: {
      hash: '',
      height: 0,
      timestamp: '',
      fee: {
        value: '0',
        displayDenom: '',
        baseDenom: '',
        exponent: 0,
      },
      gas: 0,
      memo: '',
    },
  });

  const handleSetState = useCallback((stateChange: Partial<TransactionState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    handleSetState({
      loading: true,
      exists: true,
    });
  }, [handleSetState]);

  // ===============================
  // Fetch data
  // ===============================
  useTransactionDetailsQuery({
    variables: {
      hash: router.query.tx as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTransactionDetails(data));
    },
  });

  // ===============================
  // Parse data
  // ===============================
  const formatTransactionDetails = (data: TransactionDetailsQuery) => {
    const stateChange = {
      loading: false,
    };

    if (!data.transaction.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // =============================
    // overview
    // =============================
    const formatOverview = () => {
      const { fee } = data.transaction[0];
      const feeAmount = fee?.amount?.[0] ?? {
        denom: '',
        amount: 0,
      };

      const overview = {
        hash: data.transaction[0].hash,
        height: data.transaction[0].height,
        timestamp: data.transaction[0].block.timestamp,
        fee: formatToken(feeAmount.amount, feeAmount.denom),
        gas: data.transaction[0].gasUsed,
        memo: data.transaction[0].memo,
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    return stateChange;
  };

  return {
    state,
  };
};
