import { ProposalsQuery, useProposalsQuery } from '@/graphql/types/general_types';
import type { ProposalsState, ProposalType } from '@/screens/proposals/types';
import { getProposalType } from '@/screens/proposal_details/utils';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import xss from 'xss';

const formatProposals = (data: ProposalsQuery) =>
  data.proposals.map((x): ProposalType => {
    const description = xss(x.description.replace(/\\n\s?/g, '<br/>'));
    return {
      description,
      id: x.proposalId,
      title:
        x.title === '' || x.title === ' '
          ? getProposalType(R.pathOr('', [0, '@type'], x.content))
          : x.title,
      status: x.status ?? '',
    };
  });

export const useProposals = () => {
  const [state, setState] = useState<ProposalsState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: true,
    rawDataTotal: 0,
  });

  const handleSetState = useCallback(
    (stateChange: (prevState: ProposalsState) => ProposalsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

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
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        items: newItems,
        hasNextPage: newItems.length < (data.total?.aggregate?.count ?? 0),
        isNextPageLoading: false,
        rawDataTotal: data.total?.aggregate?.count ?? prevState.rawDataTotal,
      }));
    },
  });

  const loadNextPage = async () => {
    handleSetState((prevState) => ({ ...prevState, isNextPageLoading: true }));
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
        handleSetState((prevState) => ({
          ...prevState,
          items: newItems,
          isNextPageLoading: false,
          hasNextPage: newItems.length < (data.total?.aggregate?.count ?? 0),
          rawDataTotal: data.total?.aggregate?.count ?? prevState.rawDataTotal,
        }));
      });
  };

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
