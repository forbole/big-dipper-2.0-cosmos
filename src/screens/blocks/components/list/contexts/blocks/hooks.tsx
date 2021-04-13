import {
  useState,
  useEffect,
} from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import {
  // useBlocksListenerSubscription,
  useBlocksQuery,
  BlocksListenerSubscription,
} from '@graphql/types';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { AvatarName } from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useChainContext } from '@contexts';

export const useBlocks = () => {
  const { findAddress } = useChainContext();

  const fakeData = {
    height: '812,768,640',
    proposer: {
      image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      moniker: 'Forbole',
      identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
    },
    hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    tx: 2,
    time: 1615187146246,
  };

  const [state, setState] = useState({
    items: [],
    isNextPageLoading: false,
    hasNextPage: true,
  });
  const {
    items,
    isNextPageLoading,
    hasNextPage,
  } = state;
  const TOTAL = 1000;

  useEffect(() => {
    if (isNextPageLoading) {
      setTimeout(() => {
        setState((prevState) => {
          const newItems = [...prevState.items, ...Array(20).fill(fakeData)];
          return (
            {
              ...prevState,
              hasNextPage: newItems.length < TOTAL,
              isNextPageLoading: false,
              items: newItems,
            }
          );
        });
      }, 2500);
    }
  }, [state]);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // block subscription
  // ================================
  // useBlocksListenerSubscription({
  //   onSubscriptionData: (data) => {
  // handleSetState({
  //   items: [
  //     formatBlocks(data.subscriptionData.data),
  //     ...state.items,
  //   ],
  //     });
  //   },
  // });

  // ================================
  // block query
  // ================================
  const blockQuery = useBlocksQuery({
    variables: {
      limit: 10,
      offset: 1,
    },
    onCompleted: (data) => {
      handleSetState({
        items: [
          ...state.items,
          formatBlocks(data), // paste on to existing ones
        ],
      });
      // setState((prevState) => ({
      //   ...prevState,
      //   blockTime: formatAverageBlockTime(data),
      // }));
    },
  });

  // wingman
  // setup loadmore
  const loadNextPage = async () => {
    if (state.items.length > 10) {
      await blockQuery.fetchMore({
        variables: {
          offset: state.items.length,
        },
      }).then(({ data }) => {
        handleSetState({
          items: [
            ...state.items,
            formatBlocks(data), // paste on to existing ones
          ],
        });
      });
    }
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
          beginning: 6, ending: 5,
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
  };
};
