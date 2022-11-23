import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useTransactionDetailsQuery, TransactionDetailsQuery } from '@/graphql/types/general_types';
import { formatToken } from '@/utils/format_token';
import { convertMsgsToModels } from '@/components/msg/utils';
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
      gasUsed: 0,
      gasWanted: 0,
      success: false,
      memo: '',
      error: '',
    },
    logs: null,
    messages: {
      filterBy: 'none',
      viewRaw: false,
      items: [],
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
    const stateChange: any = {
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
      const feeAmount = R.pathOr(
        {
          denom: '',
          amount: 0,
        },
        ['amount', 0],
        fee
      );
      const { success } = data.transaction[0];
      const overview = {
        hash: data.transaction[0].hash,
        height: data.transaction[0].height,
        timestamp: data.transaction[0].block.timestamp,
        fee: formatToken(feeAmount.amount, feeAmount.denom),
        gasUsed: data.transaction[0].gasUsed,
        gasWanted: data.transaction[0].gasWanted,
        success,
        memo: data.transaction[0].memo,
        error: success ? '' : data.transaction[0].rawLog,
      };
      return overview;
    };

    stateChange.overview = formatOverview();

    // =============================
    // logs
    // =============================
    const formatLogs = () => {
      const { logs } = data.transaction[0];
      return logs;
    };
    stateChange.logs = formatLogs();

    // =============================
    // messages
    // =============================
    const formatMessages = () => {
      const messages = convertMsgsToModels(data.transaction[0]);
      return {
        items: messages,
      };
    };
    stateChange.messages = formatMessages();
    return stateChange;
  };

  const onMessageFilterCallback = useCallback(
    (value: string) => {
      handleSetState({
        messages: {
          filterBy: value,
        },
      });
    },
    [handleSetState]
  );

  const toggleMessageDisplay = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSetState({
        messages: {
          viewRaw: event.target.checked,
        },
      });
    },
    [handleSetState]
  );

  const filterMessages = useCallback(
    (messages: any[]) =>
      messages.filter((x) => {
        if (state.messages.filterBy !== 'none') {
          return x.category === state.messages.filterBy;
        }
        return true;
      }),
    [state.messages.filterBy]
  );

  return {
    state,
    onMessageFilterCallback,
    toggleMessageDisplay,
    filterMessages,
  };
};
