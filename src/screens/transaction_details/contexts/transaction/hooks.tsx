import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Result } from '@components';
import {
  useTransactionDetailsQuery,
  TransactionDetailsQuery,
} from '@graphql/types';
import { getDenom } from '@utils/get_denom';
import { formatDenom } from '@utils/format_denom';
import { TransactionState } from './types';
import {
  getMessageModelByType,
  getMessageByType,
} from '../../utils';

export const useTransaction = (initalState: TransactionState) => {
  const router = useRouter();
  const { t } = useTranslation('transactions');
  const [state, setState] = useState(initalState);

  useTransactionDetailsQuery({
    variables: {
      hash: router.query.tx as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTransactionDetails(data));
    },
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const formatTransactionDetails = (data: TransactionDetailsQuery) => {
    const results: any = {
      rawData: {
        loading: false,
      },
    };

    const { fee } = data.transaction[0];
    const feeList = R.pathOr([], ['amount'], fee);
    const feeAmount = getDenom(feeList);
    // =============================
    // transaction
    // =============================
    const transaction = {
      hash: data.transaction[0].hash,
      height: data.transaction[0].height,
      timestamp: data.transaction[0].block.timestamp,
      fee: formatDenom(feeAmount.amount),
      gasUsed: data.transaction[0].gasUsed,
      gasWanted: data.transaction[0].gasWanted,
      success: data.transaction[0].success,
      memo: data.transaction[0].memo,
    };
    results.rawData.transaction = transaction;

    // =============================
    // messages
    // =============================
    const messages = data.transaction[0].messages.map((x) => {
      return getMessageModelByType(x?.['@type']).fromJson(x);
    });

    results.rawData.messages = messages;

    return results;
  };

  const formatUi = () => {
    return ({
      messages: state.rawData.messages.map((x) => {
        return getMessageByType(x, t);
      }),
      transaction: [
        {
          label: t('hash'),
          detail: state.rawData.transaction.hash,
        },
        {
          label: t('height'),
          detail: (
            <Link href={BLOCK_DETAILS(123)} passHref>
              <Typography variant="body1" className="value" component="a">
                {state.rawData.transaction.height}
              </Typography>
            </Link>
          ),
        },
        {
          label: t('time'),
          detail: dayjs(state.rawData.transaction.timestamp).format('DD MMM YYYY, HH:mm'),
        },
        {
          label: t('fee'),
          detail: numeral(state.rawData.transaction.fee).format('0,0.[0000]'),
        },
        {
          label: t('gas'),
          detail: `${numeral(state.rawData.transaction.gasUsed).format('0,0.[00]')} / ${numeral(state.rawData.transaction.gasWanted).format('0,0.[00]')}`,
        },
        {
          label: t('result'),
          detail: (
            <Result success={state.rawData.transaction.success} />
          ),
        },
        {
          className: 'memo',
          label: t('memo'),
          detail: state.rawData.transaction.memo,
        },
      ],
    });
  };

  const onMessageFilterCallback = (value: string) => {
    console.log(`filtered value: ${value}`);
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
    onMessageFilterCallback,
  };
};
