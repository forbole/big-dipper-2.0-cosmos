import { useState } from 'react';
import * as R from 'ramda';
import {
  useIscnsQuery,
  IscnsQuery,
} from '@graphql/types';
import { IscnsState } from './types';

export const useIscns = () => {
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
      const newItems = R.uniq([...state.items, ...formatProposals(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: newItems.length < data.total.aggregate.count,
        isNextPageLoading: false,
        rawDataTotal: data.total.aggregate.count,
      });
    },
  });

  const formatIscns = (data: IscnsQuery) => {
    return data.iscnRecord.map((x) => {
      return ({
        iscnId: x.iscnId,
        ipld: x.ipld,
        height: x.height,
        iscnData: {
          name: R.pathOr('', ['iscnData', 'ContentMetadata', 'name'], x),
          publisher: R.pathOr('', ['iscnData', 'ContentMetadata', 'publisher'], x),
        },
        // id: x.proposalId,
        // title: x.title,
        // description: x.description,
        // status: x.status,
      });
    });
  };
};
