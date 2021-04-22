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
import {
  AvatarName, Result,
} from '@components';
import { formatDenom } from '@utils/format_denom';
import { useChainContext } from '@contexts';
import { getValidatorCondition } from '@utils/get_validator_condition';
import { ValidatorsState } from './types';

export const useValidators = (initialState: ValidatorsState) => {
  const { findAddress } = useChainContext();
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };
  // const fakeData = {
  //   validator: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   votingPower: '12,320,000',
  //   votingPowerPercent: 40,
  //   votingPowerTotal: '100,000,000',
  //   commission: '10%',
  //   self: '10%',
  //   condition: 90,
  // };

  // const fakeDataTwo = {
  //   validator: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   votingPower: '12,320,000',
  //   votingPowerPercent: 40,
  //   votingPowerTotal: '100,000,000',
  //   commission: '10%',
  //   self: '10%',
  //   condition: 50,
  // };

  const [state, setState] = useState(initialState);

  const {
    items,
    tab,
    sortKey,
    sortDirection,
  } = state;

  // useEffect(() => {
  //   const newItems = Array(TOTAL).fill(null);
  //   newItems.forEach((x, i) => {
  //     newItems[i] = i % 2 ? fakeData : fakeDataTwo;
  //   });

  //   setState((prevState) => ({
  //     ...prevState,
  //     items: newItems,
  //   }));
  // }, []);

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

  // const fakeDataTwo = {
  //   validator: {
  //     image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
  //     moniker: 'Forbole',
  //     identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
  //   },
  //   votingPower: '12,320,000',
  //   votingPowerPercent: 40,
  //   votingPowerTotal: '100,000,000',
  //   commission: '10%',
  //   self: '10%',
  //   condition: 50,
  // };

  const formatValidators = (data: ValidatorsQuery) => {
    const votingPowerOverall = formatDenom(R.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data));
    const signedBlockWindow = R.pathOr(0, ['slashingParams', 0, 'signedBlockWindow'], data);
    const formattedItems = data.validator.map((x) => {
      const validator = x.validatorInfo.operatorAddress;
      const votingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
      const votingPowerPercent = numeral((votingPower / votingPowerOverall) * 100).value();
      const [selfDelegation] = x.delegations.filter(
        (y) => y.validator.validatorInfo.operatorAddress === validator,
      );
      const self = formatDenom(numeral(R.pathOr(0, ['amount', 'amount'], selfDelegation)).value());
      const selfPercent = (self / votingPower) * 100;
      const missedBlockCounter = R.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], x);
      const condition = getValidatorCondition(signedBlockWindow, missedBlockCounter);
      return ({
        validator,
        votingPower,
        votingPowerPercent,
        commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], x),
        self,
        selfPercent,
        condition,
      });
    });
    return {
      votingPowerOverall,
      items: formattedItems,
    };
  };

  const formatUi = () => {
    return state.items.map((x) => {
      const validator = findAddress(x.validator);
      return ({
        validator: (
          <AvatarName
            address={x.validator}
            imageUrl={validator ? validator?.imageUrl : null}
            name={validator ? validator.moniker : x.validator}
          />
        ),
        votingPower: numeral(x.votingPower).format('0,0'),
        votingPowerPercent: `${x.votingPowerPercent}%`,
        votingPowerTotal: numeral(state.votingPowerOverall).format('0,0'),
        commission: `${x.commission}%`,
        self: `${x.selfPercent}`,
        condition: x.condition,
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
    // if (sortKey && sortDirection) {
    //   sortableItems.sort((a, b) => {
    //     if (a[sortKey] < b[sortKey]) {
    //       return sortDirection === 'asc' ? -1 : 1;
    //     }
    //     if (a[sortKey] > b[sortKey]) {
    //       return sortDirection === 'asc' ? 1 : -1;
    //     }
    //     return 0;
    //   });
    // }
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
  };
};
