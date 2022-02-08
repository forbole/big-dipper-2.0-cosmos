import { useState } from 'react';
import Big from 'big.js';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useValidatorsQuery,
  ValidatorsQuery,
} from '@graphql/types';
import { getValidatorCondition } from '@utils/get_validator_condition';
import { formatToken } from '@utils/format_token';
import { SlashingParams } from '@models';
import { chainConfig } from '@src/configs';
import {
  ValidatorsState,
  ItemType,
  ValidatorType,
} from './types';

export const useValidators = () => {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<ValidatorsState>({
    loading: true,
    exists: true,
    items: [],
    votingPowerOverall: 0,
    tab: 0,
    sortKey: 'validator.name',
    sortDirection: 'asc',
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Fetch Data
  // ==========================
  useValidatorsQuery({
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        ...formatValidators(data),
      });
    },
  });

  // ==========================
  // Parse data
  // ==========================
  const formatValidators = (data: ValidatorsQuery) => {
    const slashingParams = SlashingParams.fromJson(R.pathOr({}, ['slashingParams', 0, 'params'], data));
    const votingPowerOverall = numeral(formatToken(
      R.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data),
      chainConfig.votingPowerTokenUnit,
    ).value).value();

    const { signedBlockWindow } = slashingParams;

    let formattedItems: ValidatorType[] = data.validator.filter((x) => x.validatorInfo).map((x) => {
      const votingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
      const votingPowerPercent = numeral((votingPower / votingPowerOverall) * 100).value();

      const missedBlockCounter = R.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], x);
      const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

      return ({
        validator: x.validatorInfo.operatorAddress,
        votingPower,
        votingPowerPercent,
        commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], x) * 100,
        condition,
        status: R.pathOr(0, ['validatorStatuses', 0, 'status'], x),
        jailed: R.pathOr(false, ['validatorStatuses', 0, 'jailed'], x),
        tombstoned: R.pathOr(false, ['validatorSigningInfos', 0, 'tombstoned'], x),
      });
    });

    // get the top 34% validators
    formattedItems = formattedItems.sort((a, b) => {
      return a.votingPower > b.votingPower ? -1 : 1;
    });

    // add key to indicate they are part of top 34%
    let cumulativeVotingPower = Big(0);
    let reached = false;
    formattedItems.forEach((x) => {
      if (x.status === 3) {
        const totalVp = cumulativeVotingPower.add(x.votingPowerPercent);
        if (totalVp.lte(34) && !reached) {
          x.topVotingPower = true;
        }

        if (totalVp.gt(34) && !reached) {
          x.topVotingPower = true;
          reached = true;
        }

        cumulativeVotingPower = totalVp;
      }
    });

    return {
      votingPowerOverall,
      items: formattedItems,
    };
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

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

  const sortItems = (items: ItemType[]) => {
    let sorted: ItemType[] = R.clone(items);

    if (state.tab === 0) {
      sorted = sorted.filter((x) => x.status === 3);
    }

    if (state.tab === 1) {
      sorted = sorted.filter((x) => x.status !== 3);
    }

    if (search) {
      sorted = sorted.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return (
          x.validator.name.toLowerCase().replace(/ /g, '').includes(formattedSearch)
          || x.validator.address.toLowerCase().includes(formattedSearch)
        );
      });
    }

    if (state.sortKey && state.sortDirection) {
      sorted.sort((a, b) => {
        let compareA = R.pathOr(undefined, [...state.sortKey.split('.')], a);
        let compareB = R.pathOr(undefined, [...state.sortKey.split('.')], b);

        if (typeof compareA === 'string') {
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

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return {
    state,
    handleTabChange,
    handleSort,
    handleSearch,
    sortItems,
  };
};
