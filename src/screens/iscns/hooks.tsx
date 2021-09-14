import { useState } from 'react';
import * as R from 'ramda';
import {
  useIscnsQuery,
  IscnsQuery,
} from '@graphql/types';
import { useChainContext } from '@contexts';
import { IscnsState } from './types';

export const useIscns = () => {
  const { findAddress } = useChainContext();
  const [state, setState] = useState<IscnsState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
    rawDataTotal: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // iscn query
  // ================================

  const iscnQuery = useIscnsQuery({
    variables: {
      limit: 50,
      offset: 0,
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatIscns(data)]);
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
    await iscnQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: 50,
      },
    }).then(({ data }) => {
      const newItems = R.uniq([
        ...state.items,
        ...formatIscns(data),
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

  const formatIscns = (data: IscnsQuery) => {
    return data.iscnRecord.map((x) => {
      const ownerAddress = R.pathOr('', ['ownerAddress'], x);
      const owner = findAddress(ownerAddress);
      return ({
        iscnId: x.iscnId,
        ipld: x.ipld,
        height: x.height,
        owner: {
          address: ownerAddress,
          imageUrl: owner.imageUrl,
          name: owner.moniker,
        },
        iscnData: {
          name: R.pathOr('', ['iscnData', 'ContentMetadata', 'name'], x).trim(),
          publisher: R.pathOr('', ['iscnData', 'ContentMetadata', 'publisher'], x),
          url: R.pathOr('', ['iscnData', 'ContentMetadata', 'url'], x),
        },
      });
    });
  };

  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;

  return {
    state,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  };
};
