import Big from 'big.js';
import numeral from 'numeral';
import * as R from 'ramda';
import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { SlashingParams } from '@/models';
import chainConfig from '@/chainConfig';
import { useValidatorsQuery, ValidatorsQuery } from '@/graphql/types/general_types';
import type {
  ItemType,
  ValidatorsState,
  ValidatorType,
} from '@/screens/validators/components/list/types';
import { formatToken } from '@/utils/format_token';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getValidatorCondition } from '@/utils/get_validator_condition';
import { useOnlineVotingPowerQuery } from '@/graphql/types/provider_types';

const { extra, votingPowerTokenUnit } = chainConfig();

// ==========================
// Parse data
// ==========================
const formatValidators = ({
  data,
  bonded,
}: {
  data: ValidatorsQuery;
  bonded: string;
}): Partial<ValidatorsState> => {
  const slashingParams = SlashingParams.fromJson(
    data?.bdjuno_provider?.slashingParams?.[0]?.params ?? {}
  );
  const votingPowerOverall = numeral(formatToken(bonded, votingPowerTokenUnit).value).value() ?? 0;

  const { signedBlockWindow } = slashingParams;

  let formattedItems: ValidatorType[] = data.ccv_validator
    .filter((x) => x?.validator?.validatorInfo)
    .map((x) => {
      const votingPower =
        (x?.validator?.validatorVotingPowers?.[0]?.votingPower ?? 0) /
        10 ** (extra.votingPowerExponent ?? 0);
      const votingPowerPercent = votingPowerOverall
        ? numeral((votingPower / votingPowerOverall) * 100).value()
        : 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const missedBlockCounter = x?.validator?.validatorSigningInfos?.[0]?.missedBlocksCounter ?? 0;
      const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

      return {
        consumerOperatorAddress: x.consumer_operator_address ?? '',
        validator: x.validator?.validatorInfo?.operatorAddress ?? '',
        votingPower: votingPower ?? 0,
        votingPowerPercent: votingPowerPercent ?? 0,
        commission: (x?.validator?.validatorCommissions?.[0]?.commission ?? 0) * 100,
        condition,
        status: x?.validator?.validatorStatuses?.[0]?.status ?? 0,
        jailed: x?.validator?.validatorStatuses?.[0]?.jailed ?? false,
        tombstoned: x?.validator?.validatorSigningInfos?.[0]?.tombstoned ?? false,
      };
    });

  // get the top 34% validators
  formattedItems = formattedItems.sort((a, b) => (a.votingPower > b.votingPower ? -1 : 1));

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

export const useValidators = () => {
  const [search, setSearch] = useState('');
  const [bonded, setBonded] = useState('0');
  const [valData, setValData] = useState<any>(null);
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
  const { data: totalVotingPower } = useOnlineVotingPowerQuery();

  useEffect(() => {
    if (totalVotingPower?.bdjuno_provider && valData !== null) {
      const tokens = totalVotingPower?.bdjuno_provider.stakingPool[0].bonded;
      setBonded(tokens);
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        ...formatValidators({ data: valData, bonded }),
      }));
    }
  }, [bonded, handleSetState, totalVotingPower, valData]);

  useValidatorsQuery({
    onCompleted: (data) => {
      setValData(data);
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        ...formatValidators({ data, bonded }),
      }));
    },
    onError: () => {
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        exists: false,
      }));
    },
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

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const sortItems = useCallback(
    (items: ItemType[]) => {
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
            x.validator.name.toLowerCase().replace(/ /g, '').includes(formattedSearch) ||
            x.validator.address.toLowerCase().includes(formattedSearch)
          );
        });
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
    [search, state.sortDirection, state.sortKey, state.tab]
  );

  return {
    state,
    handleTabChange,
    handleSort,
    handleSearch,
    sortItems,
    search,
  };
};
