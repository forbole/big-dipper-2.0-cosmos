import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useValidatorsQuery,
  ValidatorsQuery,
} from '@graphql/types';
import { AvatarName } from '@components';
import { formatDenom } from '@utils/format_denom';
import { useChainContext } from '@contexts';
import {
  getValidatorCondition, getValidatorConditionClass,
} from '@utils/get_validator_condition';
import {
  ValidatorsState, ValidatorItems,
} from './types';
import {
  VotingPower, Condition,
} from '../../components';

export const useValidators = (initialState: ValidatorsState) => {
  const { findAddress } = useChainContext();
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState('');
  const {
    items,
    tab,
    sortKey,
    sortDirection,
  } = state;

  useValidatorsQuery({
    onCompleted: (data) => {
      handleSetState(formatValidators(data));
    },
  });

  const formatValidators = (data: ValidatorsQuery) => {
    const votingPowerOverall = formatDenom(R.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data));
    const signedBlockWindow = R.pathOr(0, ['slashingParams', 0, 'signedBlockWindow'], data);
    const formattedItems = data.validator.map((x) => {
      const validator = x.validatorInfo.operatorAddress;
      const votingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
      const votingPowerPercent = numeral((votingPower / votingPowerOverall) * 100).value();
      const totalDelegations = x.delegations.reduce((a, b) => {
        return a + numeral(R.pathOr(0, ['amount', 'amount'], b)).value();
      }, 0);

      const [selfDelegation] = x.delegations.filter(
        (y) => {
          return y.delegatorAddress === x.validatorInfo.selfDelegateAddress;
        },
      );
      const self = numeral(R.pathOr(0, ['amount', 'amount'], selfDelegation)).value();
      const selfPercent = (self / (totalDelegations || 1)) * 100;

      const missedBlockCounter = R.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], x);
      const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);

      return ({
        moniker: findAddress(validator)?.moniker || validator,
        validator,
        votingPower,
        votingPowerPercent,
        commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], x) * 100,
        self,
        selfPercent,
        condition,
        status: R.pathOr(0, ['validatorStatuses', 0, 'status'], x),
        jailed: R.pathOr(false, ['validatorStatuses', 0, 'jailed'], x),
        delegators: x.delegations.length,
      });
    });

    return {
      votingPowerOverall,
      items: formattedItems,
    };
  };

  const formatUi = (formatItems: ValidatorItems[]) => {
    return formatItems.map((x, i) => {
      const validator = findAddress(x.validator);
      const condition = x.status === 3 ? getValidatorConditionClass(x.condition) : undefined;
      return ({
        idx: `#${i + 1}`,
        delegators: numeral(x.delegators).format('0,0'),
        validator: (
          <AvatarName
            address={x.validator}
            imageUrl={validator ? validator?.imageUrl : null}
            name={validator ? validator.moniker : x.validator}
          />
        ),
        commission: `${numeral(x.commission).format('0.[00]')}%`,
        self: `${numeral(x.selfPercent).format('0.[00]')}%`,
        condition: (
          <Condition className={condition} />
        ),
        votingPower: (
          <VotingPower
            percentDisplay={`${numeral(x.votingPowerPercent).format('0.[00]')}%`}
            percentage={x.votingPowerPercent}
            content={numeral(x.votingPower).format('0,0')}
          />
        ),
      });
    });
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  // ===========================
  // sorting
  // ===========================

  const handleSort = (key: string) => {
    if (key === sortKey) {
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

  const uiSort = () => {
    let sorted: ValidatorItems[] = R.clone(items);

    if (tab === 1) {
      sorted = sorted.filter((x) => x.status === 3);
    }

    if (tab === 2) {
      sorted = sorted.filter((x) => x.status !== 3);
    }

    if (search) {
      sorted = sorted.filter((x) => {
        return (
          x.moniker.toLowerCase().includes(search)
          || x.validator.includes(search)
        );
      });
    }

    if (sortKey && sortDirection) {
      sorted.sort((a, b) => {
        let compareA = a[sortKey];
        let compareB = b[sortKey];
        if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        if (compareA < compareB) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (compareA > compareB) {
          return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return formatUi(sorted);
  };

  // ===========================
  // search
  // ===========================
  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return {
    items: state.items,
    tab,
    handleTabChange,
    handleSort,
    sortKey,
    sortDirection,
    handleSearch,
    votingPowerOverall: state.votingPowerOverall,
    uiData: uiSort(),
  };
};
