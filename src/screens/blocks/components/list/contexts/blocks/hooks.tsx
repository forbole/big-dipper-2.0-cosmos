import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import {
  useBlocksListenerSubscription,
  useBlocksQuery,
  BlocksListenerSubscription,
} from '@graphql/types';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { AvatarName } from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useChainContext } from '@contexts';
import { BlocksState } from './types';

export const useBlocks = (initialState: BlocksState) => {
  const { findAddress } = useChainContext();

  const [state, setState] = useState(initialState);
  const {
    items,
    isNextPageLoading,
    hasNextPage,
  } = state;

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // block subscription
  // ================================
  useBlocksListenerSubscription({
    variables: {
      limit: 1,
    },
    onSubscriptionData: (data) => {
      handleSetState({
        items: [
          ...formatBlocks(data.subscriptionData.data),
          ...state.items,
        ],
      });
    },
  });

  // ================================
  // block query
  // ================================
  const blockQuery = useBlocksQuery({
    variables: {
      limit: 50,
      offset: 1,
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatBlocks(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: newItems.length < data.total.aggregate.count,
        isNextPageLoading: false,
        rawDataTotal: data.total.aggregate.count,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await blockQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: 50,
      },
    }).then(({ data }) => {
      const newItems = R.uniq([
        ...state.items,
        ...formatBlocks(data),
      ]);
      // set new state
      handleSetState({
        items: newItems,
        isNextPageLoading: false,
        hasNextPage: newItems.length < data.total.aggregate.count,
        rawDataTotal: data.total.aggregate.count,
      });
    });
  };

  const formatBlocks = (data: BlocksListenerSubscription) => {
    return data.blocks.map((x) => {
      return ({
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: x.validator.validatorInfo.operatorAddress,
      });
    });
  };

  const formatUi = (screen: 'mobile' | 'desktop' = 'mobile') => {
    return state.items.map((x) => {
      const validator = findAddress(x.proposer);
      const hash = screen === 'mobile'
        ? getMiddleEllipsis(x.hash, {
          beginning: 13, ending: 10,
        })
        : getMiddleEllipsis(x.hash, {
          beginning: 13, ending: 15,
        });

      return ({
        height: (
          <Link href={BLOCK_DETAILS(x.height)} passHref>
            <Typography variant="body1" className="value" component="a">
              {numeral(x.height).format('0,0')}
            </Typography>
          </Link>
        ),
        txs: numeral(x.txs).format('0,0'),
        time: dayjs.utc(x.timestamp).fromNow(),
        proposer: (
          <AvatarName
            address={x.proposer}
            imageUrl={validator ? validator?.imageUrl : null}
            name={validator ? validator.moniker : x.proposer}
          />
        ),
        hash,
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
    rawData: state.items,
    rawDataTotal: state.rawDataTotal,
  };
};
