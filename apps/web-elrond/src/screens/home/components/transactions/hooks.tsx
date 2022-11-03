import { useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import {
  POLLING_INTERVAL,
  TRANSACTIONS,
} from '@api';
import { useInterval } from '@hooks';
import { convertMsgType } from '@utils/convert_msg_type';
import { TransactionState } from './types';

export const PAGE_SIZE = 7;

export const useBlocks = () => {
  const [state, setState] = useState<TransactionState>({
    items: [],
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const getTransactionsByPage = async () => {
    try {
      const { data: transactionsData } = await axios.get(TRANSACTIONS, {
        params: {
          from: 0,
          size: PAGE_SIZE,
        },
      });

      const items = transactionsData.map((x) => {
        const msgType = x.messages.map((eachMsg) => {
          const eachMsgType = R.pathOr('none type', ['@type'], eachMsg);
          return eachMsgType;
        });
        const convertedMsgType = convertMsgType(msgType);
        return ({
          hash: x.txHash,
          type: convertedMsgType,
          from: x.sender,
          to: x.receiver,
          timestamp: x.timestamp,
          status: x.status,
        });
      });

      handleSetState({
        items,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useInterval(getTransactionsByPage, POLLING_INTERVAL);

  return ({
    state,
  });
};
