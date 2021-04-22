import {
  useState,
  useEffect,
  useMemo,
} from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useValidatorsLazyQuery,
  useLatestStakingHeightQuery,
  ValidatorsQuery,
} from '@graphql/types';
import { AvatarName } from '@components';
import { formatDenom } from '@utils/format_denom';
import { useChainContext } from '@contexts';
import {
  getValidatorCondition, getValidatorConditionClass,
} from '@utils/get_validator_condition';
import { ValidatorsState } from './types';
import {
  VotingPower, Condition,
} from '../../components';

export const useValidators = (initialState: ValidatorsState) => {
  const { findAddress } = useChainContext();
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const [state, setState] = useState(initialState);

  const {
    items,
    tab,
    sortKey,
    sortDirection,
  } = state;

  useLatestStakingHeightQuery({
    onCompleted: (data) => {
      const delegationHeight = data.delegation[0]?.height;
      useValidatorQuery({
        variables: {
          delegationHeight,
        },
      });
    },
  });

  const [useValidatorQuery] = useValidatorsLazyQuery({
    onCompleted: (data) => {
      handleSetState(formatValidators(data));
    },
  });

  useEffect(() => {
    console.log(`tab has changed to ${tab}`);
  }, [tab]);

  const formatValidators = (data: ValidatorsQuery) => {
    const votingPowerOverall = formatDenom(R.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data));
    const signedBlockWindow = R.pathOr(0, ['slashingParams', 0, 'signedBlockWindow'], data);
    const formattedItems = data.validator.map((x) => {
      const validator = x.validatorInfo.operatorAddress;
      const votingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
      const votingPowerPercent = numeral((votingPower / votingPowerOverall) * 100).value();
      const [selfDelegation] = x.delegations.filter(
        (y) => {
          return y.delegatorAddress === x.validatorInfo.selfDelegateAddress;
        },
      );

      const self = formatDenom(numeral(R.pathOr(0, ['amount', 'amount'], selfDelegation)).value());
      const selfPercent = (self / (votingPower || 1)) * 100;
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
      });
    });
    // .sort((a, b) => {
    //   return a.moniker.toLowerCase() < b.moniker.toLowerCase() ? -1 : 1;
    // });

    return {
      votingPowerOverall,
      items: formattedItems,
    };
  };

  const formatUi = () => {
    return state.items.map((x, i) => {
      const validator = findAddress(x.validator);
      const condition = x.status === 3 ? getValidatorConditionClass(x.condition) : undefined;
      return ({
        idx: `#${i + 1}`,
        validator: (
          <AvatarName
            address={x.validator}
            imageUrl={validator ? validator?.imageUrl : null}
            name={validator ? validator.moniker : x.validator}
          />
        ),
        commission: `${x.commission}%`,
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
  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    console.log('am i here');
    if (sortKey && sortDirection) {
      sortableItems.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortKey, sortDirection]);

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

  // ===========================
  // search
  // ===========================
  const handleSearch = (value: string) => {
    console.log('search validators: ', value);
  };

  return {
    items: sortedItems,
    tab,
    handleTabChange,
    handleSort,
    sortKey,
    sortDirection,
    handleSearch,
    votingPowerOverall: state.votingPowerOverall,
    uiData: formatUi(),
  };
};
