import { useState } from 'react';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import {
  useTransactionsListenerSubscription,
  TransactionsListenerSubscription,
} from '@graphql/types';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { Result } from '@components';
import { TransactionsState } from './types';

export const useTransactions = (initialState: TransactionsState) => {
  const [transactions, setTransactions] = useState<{
    height: number;
    hash: string;
    success: boolean;
    timestamp: string;
    messages: number;
  }[]>(initialState.rawData);

  useTransactionsListenerSubscription({
    onSubscriptionData: (data) => {
      setTransactions(formatTransactions(data.subscriptionData.data));
    },
  });

  const formatTransactions = (data: TransactionsListenerSubscription) => {
    return data.transactions.map((x) => {
      return ({
        height: x.height,
        hash: x.hash,
        success: x.success,
        timestamp: x.block.timestamp,
        messages: x.messages.length,
      });
    });
  };

  const formatUi = (screen: 'mobile' | 'desktop' = 'mobile') => {
    return transactions.map((x) => {
      const hash = screen === 'mobile'
        ? getMiddleEllipsis(x.hash, {
          beginning: 15, ending: 5,
        }) : getMiddleEllipsis(x.hash, {
          beginning: 15, ending: 5,
        });

      const format = {
        block: (
          <Link href={BLOCK_DETAILS(x.height)} passHref>
            <Typography variant="body1" component="a">
              {numeral(x.height).format('0,0')}
            </Typography>
          </Link>
        ),
        hash: (
          <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
            <Typography variant="body1" component="a">
              {hash}
            </Typography>
          </Link>
        ),
        result: (
          <Result success={x.success} />
        ),
        time: dayjs.utc(x.timestamp).fromNow(),
        messages: numeral(x.messages).format('0,0'),
      };

      return format;
    });
  };

  return {
    rawData: transactions,
    formatUi,
  };
};
