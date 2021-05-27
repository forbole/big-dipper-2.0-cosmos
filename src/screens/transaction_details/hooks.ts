import { useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import {
  useTransactionDetailsQuery,
  TransactionDetailsQuery,
} from '@graphql/types';
import {
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from '@models';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { TransactionState } from './types';
import { getMessageModelByType } from './utils';

export const useTransactionDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    exists: true,
    loading: true,
    overview: {
      hash: '',
      height: 0,
      timestamp: '',
      fee: 0,
      gasUsed: 0,
      gasWanted: 0,
      success: false,
      memo: '',
      error: '',
    },
    messages: {
      filterBy: 'none',
      viewRaw: false,
      items: [],
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

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
      const feeList = R.pathOr([], ['amount'], fee);
      const feeAmount = getDenom(feeList);
      const { success } = data.transaction[0];
      const overview = {
        hash: data.transaction[0].hash,
        height: data.transaction[0].height,
        timestamp: data.transaction[0].block.timestamp,
        fee: formatDenom(feeAmount.amount),
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
    // messages
    // =============================
    const formatMessages = () => {
      const messages = data.transaction[0].messages.map((x, i) => {
        const model = getMessageModelByType(x?.['@type']);
        if (model === MsgWithdrawDelegatorReward || model === MsgWithdrawValidatorCommission) {
          const log = R.pathOr(null, ['logs', i], data.transaction[0]);
          return model.fromJson(x, log);
        }
        return model.fromJson(x);
      });

      return messages;
    };
    stateChange.messages = formatMessages();
    return stateChange;
  };

  const onMessageFilterCallback = (value: string) => {
    handleSetState({
      messages: {
        filterBy: value,
      },
    });
  };

  const toggleMessageDisplay = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSetState({
      messages: {
        viewRaw: event.target.checked,
      },
    });
  };

  return {
    state,
    onMessageFilterCallback,
    toggleMessageDisplay,
  };
};
