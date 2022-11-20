import { useCallback, useState } from 'react';
import * as R from 'ramda';
import DOMPurify from 'dompurify';
import { useProposalsQuery, ProposalsQuery } from '@graphql/types/general_types';
import type { ProposalsState } from './types';

export const useProposals = () => {
  const [state, setState] = useState<ProposalsState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
    rawDataTotal: 0,
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  // ================================
  // proposals query
  // ================================

  const proposalQuery = useProposalsQuery({
    variables: {
      limit: 50,
      offset: 0,
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatProposals(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: newItems.length < (data.total?.aggregate?.count ?? 0),
        isNextPageLoading: false,
        rawDataTotal: data.total?.aggregate?.count,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await proposalQuery
      .fetchMore({
        variables: {
          offset: state.items.length,
          limit: 50,
        },
      })
      .then(({ data }) => {
        const newItems = R.uniq([...state.items, ...formatProposals(data)]);
        // set new state
        handleSetState({
          items: newItems,
          isNextPageLoading: false,
          hasNextPage: newItems.length < (data.total?.aggregate?.count ?? 0),
          rawDataTotal: data.total?.aggregate?.count,
        });
      });
  };

  const formatProposals = (data: ProposalsQuery) => data.proposals.map((x) => {
      const description = DOMPurify.sanitize(x.description);
      return {
        description,
        id: x.proposalId,
        title: x.title,
        status: x.status,
      };
    });

  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index: number) => !state.hasNextPage || index < state.items.length;

  return {
    state,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  };
};
