import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { PROPOSAL_DETAILS } from '@utils/go_to_page';
import {
  useProposalsQuery,
  ProposalsQuery,
} from '@graphql/types';
import {
  Tag,
} from '@components';

export interface ProposalsState {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  loadNextPage?: (any) => void;
  itemCount?: number;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  rawDataTotal: number;
  items: {
    id: number;
    title: string;
    description: string;
    status: string;
  }[];
  uiData: {
    id: string;
    title: string;
    description: string;
    status: string;
  }[];
}

const initialState: ProposalsState = {
  hasNextPage: false,
  isNextPageLoading: false,
  items: [],
  rawDataTotal: 0,
  uiData: [],
};

export const useProposals = () => {
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
    await proposalQuery.fetchMore({
      variables: {
        offset: state.items.length,
        limit: 50,
      },
    }).then(({ data }) => {
      const newItems = R.uniq([
        ...state.items,
        ...formatProposals(data),
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

  const formatProposals = (data: ProposalsQuery) => {
    return data.proposals.map((x) => {
      return ({
        id: x.proposalId,
        title: x.title,
        description: x.description,
        status: x.status,
      });
    });
  };

  const formatUi = () => {
    return state.items.map((x) => {
      const description = x.description.length > 200 ? `${x.description.slice(0, 200)}...` : x.description;
      return ({
        status: (
          <Tag theme="one" value={x.status.replace('PROPOSAL_STATUS_', '').replace('_', ' ')} />
        ),
        description,
        title: (
          <Link href={PROPOSAL_DETAILS(x.id)} passHref>
            <Typography variant="h3" className="value" component="a">
              {x.title}
            </Typography>
          </Link>
        ),
        id: `#${numeral(x.id).format('0,0')}`,
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
    uiData: formatUi(),
    rawData: state.items,
    rawDataTotal: state.rawDataTotal,
  };
};
