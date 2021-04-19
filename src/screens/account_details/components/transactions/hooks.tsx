import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { Result } from '@components';
import {
  useGetMessagesByAddressQuery,
  GetMessagesByAddressQuery,
} from '@graphql/types';

export const useTransactions = () => {
  const router = useRouter();
  const [state, setState] = useState<{
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    rawDataTotal: number;
    items: {
      block: number;
      hash: string;
      messages: number;
      success: boolean;
      time: string;
    }[]
  }>({
    hasNextPage: false,
    isNextPageLoading: false,
    items: [],
    rawDataTotal: 0,
  });
  const {
    items,
    isNextPageLoading,
    hasNextPage,
  } = state;

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // transaction query
  // ================================
  const transactionQuery = useGetMessagesByAddressQuery({
    variables: {
      limit: 50,
      offset: 0,
      address: `{${R.pathOr('', ['query', 'address'], router)}}`,
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatTransactions(data)]);
      handleSetState({
        items: newItems,
        // hasNextPage: newItems.length < data.total.aggregate.count,
        hasNextPage: false,
        isNextPageLoading: false,
        // rawDataTotal: data.total.aggregate.count,
        rawDataTotal: newItems.length,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await transactionQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: 50,
      },
    }).then(({ data }) => {
      const newItems = R.uniq([
        ...state.items,
        ...formatTransactions(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        // hasNextPage: newItems.length < data.total.aggregate.count,
        hasNextPage: false,
        // rawDataTotal: data.total.aggregate.count,
        rawDataTotal: newItems.length,
      });
    });
  };

  const formatTransactions = (data: GetMessagesByAddressQuery) => {
    return data.messagesByAddress.map((x) => {
      const { transaction } = x;
      return ({
        block: transaction.height,
        hash: transaction.hash,
        messages: transaction.messages.length,
        success: transaction.success,
        time: transaction.block.timestamp,
      });
    });
  };

  const formatUi = (screen: 'mobile' | 'desktop' = 'mobile') => {
    return state.items.map((x) => {
      const hash = screen === 'mobile'
        ? getMiddleEllipsis(x.hash, {
          beginning: 13, ending: 10,
        })
        : getMiddleEllipsis(x.hash, {
          beginning: 20, ending: 15,
        });

      return ({
        block: (
          <Link href={BLOCK_DETAILS(x.block)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(x.block).format('0,0')}
            </Typography>
          </Link>
        ),
        messages: numeral(x.messages).format('0,0'),
        time: dayjs.utc(x.time).fromNow(),
        result: (
          <Result success={x.success} />
        ),
        hash: (
          <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
            <Typography variant="body1" className="value" component="a">
              {hash}
            </Typography>
          </Link>
        ),
      });
    });
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;
  const loadMoreItems = isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  return {
    hasNextPage,
    isNextPageLoading,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
    formatUi,
    items: formatUi(),
    rawDataTotal: state.rawDataTotal,
  };
};
