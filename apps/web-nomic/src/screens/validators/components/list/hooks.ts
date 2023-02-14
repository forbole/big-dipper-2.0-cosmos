import Big from 'big.js';
import numeral from 'numeral';
import * as R from 'ramda';
import { SyntheticEvent, useCallback, useState } from 'react';
import type {
  ItemType,
  ValidatorsState,
  ValidatorType,
} from '@/screens/validators/components/list/types';
import { useValidatorsQuery, ValidatorsQuery } from '@/graphql/types/general_types';
import chainConfig from '@/chainConfig';

const { extra } = chainConfig();

// ==========================
// Parse data
// ==========================
const formatValidators = (data: ValidatorsQuery) => {
  const votingPowerOverall =
    (numeral(data?.stakingPool?.[0]?.bondedTokens ?? 0).value() ?? 0) /
    10 ** (extra.votingPowerExponent ?? 0);

  let formattedItems = data.validator.map((x): ValidatorType => {
    const inActiveSetString = x?.validatorStatuses?.in_active_set ?? 'false';
    const jailedString = x?.validatorStatuses?.jailed ?? 'false';
    const tombstonedString = x?.validatorStatuses?.tombstoned ?? 'false';
    const votingPower =
      (x?.validatorVotingPowers?.[0]?.votingPower ?? 0) / 10 ** (extra.votingPowerExponent ?? 0);
    const votingPowerPercent = votingPowerOverall
      ? numeral((votingPower / votingPowerOverall) * 100).value()
      : 0;

    return {
      validator: x.selfDelegateAddress,
      votingPower,
      votingPowerPercent: votingPowerPercent ?? 0,
      commission: (parseFloat(x?.validatorCommissions?.[0]?.commission ?? '0') ?? 0) * 100,
      inActiveSet: inActiveSetString,
      jailed: jailedString,
      tombstoned: tombstonedString,
    };
  });

  // get the top 34% validators
  formattedItems = formattedItems.sort((a, b) => (a.votingPower > b.votingPower ? -1 : 1));

  // add key to indicate they are part of top 34%
  let cumulativeVotingPower = Big(0);
  let reached = false;
  formattedItems.forEach((x) => {
    if (x.inActiveSet === 'true') {
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

  const handleSetState = useCallback(
    (stateChange: (prevState: ValidatorsState) => ValidatorsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ==========================
  // Fetch Data
  // ==========================
  useValidatorsQuery({
    onCompleted: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        ...formatValidators(data),
      }));
    },
    onError: () => handleSetState((prevState) => ({ ...prevState, loading: false })),
  });

  const handleTabChange = useCallback(
    (_event: SyntheticEvent<Element, globalThis.Event>, newValue: number) => {
      setState((prevState) => ({
        ...prevState,
        tab: newValue,
      }));
    },
    []
  );

  const handleSort = useCallback(
    (key: string) => {
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
    },
    [state.sortKey]
  );

  const sortItems = useCallback(
    (items: ItemType[]) => {
      let sorted: ItemType[] = R.clone(items);

      if (state.tab === 0) {
        sorted = sorted.filter((x) => x.inActiveSet === 'true');
      }

      if (state.tab === 1) {
        sorted = sorted.filter((x) => x.inActiveSet !== 'true');
      }

      if (state.sortKey && state.sortDirection) {
        sorted.sort((a, b) => {
          let compareA = R.pathOr('', [...state.sortKey.split('.')], a);
          let compareB = R.pathOr('', [...state.sortKey.split('.')], b);

          if (typeof compareA === 'string' && typeof compareB === 'string') {
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
    },
    [state.sortDirection, state.sortKey, state.tab]
  );

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return {
    state,
    handleTabChange,
    handleSort,
    handleSearch,
    sortItems,
    search,
  };
};
