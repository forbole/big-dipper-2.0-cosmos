import { useState } from 'react';
import * as R from 'ramda';
import { ValidatorsState } from './types';
import { ValidatorType } from '../../types';

export const useProviders = (search: string) => {
  const [state, setState] = useState<ValidatorsState>({
    sortKey: 'locked.value',
    sortDirection: 'desc',
  });

  const handleSort = (key: string) => {
    if (key === state.sortKey) {
      setState((prevState) => ({
        ...prevState,
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sortKey: key,
        sortDirection: 'asc', // new key so we start the sort by asc
      }));
    }
  };

  const sortItems = (items: ValidatorType[]) => {
    let sorted: ValidatorType[] = R.clone(items);

    if (search) {
      sorted = sorted.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return (
          x.validator.name.toLowerCase().replace(/ /g, '').includes(formattedSearch) ||
          x.validator.address.toLowerCase().includes(formattedSearch)
        );
      });
    }

    if (state.sortKey && state.sortDirection) {
      sorted.sort((a, b) => {
        let compareA: any = R.pathOr(undefined, [...state.sortKey.split('.')], a);
        let compareB: any = R.pathOr(undefined, [...state.sortKey.split('.')], b);

        if (state.sortKey === 'locked.value') {
          compareA = Number(compareA);
          compareB = Number(compareB);
        } else if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        const edgeCases = ['commission', 'apr', 'delegators'];
        if (edgeCases.includes(state.sortKey)) {
          compareA = Number(compareA || 0);
          compareB = Number(compareB || 0);
        } else if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        if (compareA < compareB) {
          return state.sortDirection === 'asc' ? -1 : 1;
        }
        if (compareA > compareB) {
          return state.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sorted;
  };

  return {
    state,
    handleSort,
    sortItems,
  };
};
